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

const AddBill = () =>{
    
    const [isEnabled, setIsEnabled] = useState(false);
  
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    //Mascara da Data
    const [date, setDate] = useState('');

    const formatDate = (text: string) => {
        // Remove tudo que não é número
        let cleaned = text.replace(/\D/g, '');
        
        // Aplica a máscara: DD/MM/AAAA
        if (cleaned.length <= 2) {
        return cleaned;
        } else if (cleaned.length <= 4) {
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
        } else {
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
        }
    };

    const handleDateChange = (text: string) => {
        const formattedDate = formatDate(text);
        setDate(formattedDate);
    };




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
                    />

                    <TextInput 
                    style={styles.input}
                    placeholder="Valor"
                    keyboardType= "numeric"
                    />

                     <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                        value={date}
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

                <TouchableOpacity style={styles.saveButton} >
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