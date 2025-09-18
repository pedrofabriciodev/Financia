import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// import styles from "./billStyle";
// import Octicons from "react-native-vector-icons/Octicons"

import { MaterialIcons, Octicons } from "@expo/vector-icons";

import BillsComponents from "@/components/BillsComponents";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

const Settings = () => {
   const insets = useSafeAreaInsets();

    return(
         <SafeAreaView style={styles.safeArea } edges={['top']}>
                <View style={styles.container}>
                    
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerIcon}>
                            <MaterialIcons name="arrow-back" size={28} onPress={ () => router.push('/(tabs)/home')}/>
                        </TouchableOpacity>

                        <Text style={styles.headerText}>
                            Profile
                        </Text>
                    </View>

                    <View style={styles.profileInfos}>
                        <Image source={require('../assets/images/profileExample.png')}/>

                        <Text style={styles.userName}>Sophia Carter</Text>

                        <Text style={styles.userEmail}>sophia.carter@email.com</Text>
                    </View>

                    <View>
                        <Text style={styles.settingsTittle}>Conta</Text>

                        <Text style={styles.settingsOption}>Editar Perfil</Text>
                        <Text style={styles.settingsOption}>Mudar Senha</Text>


                        <Text style={styles.settingsTittle} >Configurações</Text>

                        <Text style={styles.settingsOption}>Notificação</Text>
                        <Text style={styles.settingsOption}>Privacidade</Text>
                        <Text style={styles.settingsOption}>Segurança</Text>
                        <Text style={styles.settingsOption}>Ajuda & Suporte</Text>
                    </View>

                    <TouchableOpacity style={styles.logoutButton} onPress={()=> router.replace('/')}>
                        <Text style={styles.logoutButtonText}>
                            Sair
                        </Text>
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
        marginBottom: 48,
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
    profileInfos:{
        alignItems:'center'
    },
    userName:{
        color: Colors.black, 
        fontWeight:'bold', 
        fontSize:22, 
        fontFamily:'Manrope', 
        marginBottom:6, 
        marginTop:7
    },
    userEmail:{
        color: Colors.grey, 
        fontWeight:'regular', 
        fontSize:16, 
        fontFamily:'Manrope', 
        marginBottom:20
    },
    settingsTittle:{
        color: Colors.black, 
        fontWeight:'bold', 
        fontSize:18, 
        marginBottom:16
    },
    settingsOption:{
        color: Colors.black, 
        fontWeight:'regular',
        fontSize:16,marginBottom:16
    },
    logoutButton: { 
        borderRadius: 8, 
        backgroundColor: Colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 80,
        width: 358,
        height: 48,
        alignSelf: 'center'
    },
    logoutButtonText:{
        color: Colors.black, 
        fontSize:14,
        fontWeight:'bold', 
    },

});

export default Settings;