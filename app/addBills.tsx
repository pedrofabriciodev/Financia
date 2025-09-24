import {
    TouchableOpacity, 
    View, 
    Text, 
    TextInput, 
    Switch, 
    StyleSheet,
    StatusBar
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
// import styles from "./addBillStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const AddBill = () =>{

    const {user} = useAuth();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [invoiceValue, setInvoiceValue] = useState('');
    
    const [isEnabled, setIsEnabled] = useState(false);
  
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    //Mascara da Data
    const [date, setDate] = useState('');

    const formatDateForDisplay = (text: string) => {
        const cleaned = text.replace(/\D/g, '').slice(0, 8); // só números
        if (cleaned.length <= 2) return cleaned;
        if (cleaned.length <= 4) return `${cleaned.slice(0,2)}/${cleaned.slice(2)}`;
        return `${cleaned.slice(0,2)}/${cleaned.slice(2,4)}/${cleaned.slice(4,8)}`;
    };

    const handleDateChange = (text: string) => {
        const cleaned = text.replace(/\D/g, '').slice(0, 8);
        setDate(cleaned); // aqui guardamos apenas dígitos (ex: "12012025")
    };

    // Converter para ISO (YYYY-MM-DD) na hora de salvar
    const getDateForDb = () => {
        if (date.length !== 8) return null;
        const day = date.slice(0, 2);
        const month = date.slice(2, 4);
        const year = date.slice(4, 8);
        return `${year}-${month}-${day}`;
    };

    const dbDate = getDateForDb();



    async function handleRegisterBills(){
        const { error: insertError } = await supabase
            .from("bills")
            .insert([
                {
                    name: name,
                    due_date: dbDate,
                    // description: description,
                    invoice_value: invoiceValue,
                    user_id: user?.id,   // pega o id do usuário logado
                    paid: isEnabled,
                }
            ]);

        if (insertError) {
            console.error("Erro ao cadastrar conta:", insertError.message);
            return;
        }

        

        router.replace('/(tabs)/home')
    }

    return(
    <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Adicionar Conta</Text>
                    <TouchableOpacity style={styles.headerIcon}><MaterialIcons name="close" size={28} onPress={()=>router.back()}/></TouchableOpacity>
                </View>

                <View style={styles.inputContainer}> 
                    <TextInput 
                    style={styles.input}
                    placeholder="Nome da Conta"
                    keyboardType="default"
                    value={name}
                    onChangeText={setName}
                    />

                    <TextInput 
                    style={styles.input}
                    placeholder="Valor"
                    keyboardType= "numeric"
                    value={invoiceValue}
                    onChangeText={setInvoiceValue}
                    />

                     <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                        value={formatDateForDisplay(date)}
                        onChangeText={handleDateChange}
                        maxLength={10} // DD/MM/AAAA = 10 caracteres
                    />
                    
                </View>

                <View       
                    style={styles.switchContainer}>
                    <Text>Pago</Text>
                    <Switch
                        trackColor={{ false: Colors.lightGrey, true: Colors.black }}
                        thumbColor={isEnabled ? Colors.white : Colors.white}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],  }}
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleRegisterBills}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea:{
        flex:1,
    },

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.white,
    },

    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 40,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginRight: 0
    },
    headerIcon:{
        position:'absolute', 
        left:10
    },
    
    inputContainer:{
        alignItems: 'center',
    },

    input: {
       
        borderRadius: 8,
        width: 358,
        height: 56,
        color: 'black',
        backgroundColor: Colors.lightGrey,
        marginBottom: 20

    },

    switchContainer:{  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%', 
        paddingHorizontal: 20, 
    },
      
    saveButton: { 
        borderRadius: 8, 
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 80,
        width: 358,
        height: 48,
        alignSelf: 'center'
    },

    saveButtonText: {
        color: Colors.white, 
        fontSize: 16
    },
});

export default AddBill;