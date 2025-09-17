import {
    TouchableOpacity, 
    View, 
    Text, 
    TextInput, 
    Switch, 
    StyleSheet
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
// import styles from "./addBillStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

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
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Adicionar Conta</Text>
                    <TouchableOpacity style={styles.headerIcon}><MaterialIcons name="close" size={28}/></TouchableOpacity>
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
                    style={{  
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%', 
                        paddingHorizontal: 20, 
                }}>
                    <Text>Pago</Text>
                    <Switch
                        trackColor={{ false: '#F0F2F5', true: '#333' }}
                        thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],  }}
                    />
                </View>

                <TouchableOpacity style={styles.addButton} >
                    <Text style={{color: 'white', fontSize: 16}}>Salvar</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity><MaterialIcons name="home" size={24}/></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name="description" size={24}/></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name="tv" size={24}/></TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        paddingTop:49,
        paddingBottom:49

    },

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
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
        color: '#333',
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
        backgroundColor: '#F0F2F5',
        marginBottom: 20

    },
      
    addButton: { 
        borderRadius: 8, 
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 80,
        width: 358,
        height: 48,
        alignSelf: 'center'
    },

    addButtonText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        padding: 16,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F0F2F5',
        height: 73,
  },
});

export default AddBill;