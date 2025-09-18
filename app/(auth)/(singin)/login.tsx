import { useState } from "react";

import {
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  TextInput,
  Dimensions,
  StatusBar
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";



import { MaterialIcons } from "@expo/vector-icons/";
import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { scaleWidth, scaleHeight, scaleFont } from "@/constants/metrics";



const Login = () => {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea } edges={['top']}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity ><MaterialIcons name="help-outline" size={24} onPress={()=> router.push('/')}/></TouchableOpacity>
                    <Text style={styles.headerText}>Entrar no Financia</Text>
                </View>

               <View > 
                    <TextInput
                    style={styles.input}
                    placeholder="Usuário ou Email"
                    keyboardType="default"
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                        style={styles.passwordInput}
                        placeholder="Senha"
                        keyboardType="default"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? "eye-off" : "eye"}
                            size={24}
                            color={Colors.grey}
                        />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={{gap:20}}>
                    <Text style={{fontSize:scaleFont(14), fontWeight:'regular', color: Colors.grey}}>
                        Esqueceu a senha?
                    </Text>

                    <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/(tabs)/home')} >
                        <Text style={{color: Colors.white}}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.othersLoginButton} onPress={() => router.replace('/(tabs)/home')} >
                        <Text style={{color: Colors.black}}>
                            Continuar com Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.othersLoginButton} onPress={() => router.replace('/(tabs)/home')} >
                        <Text style={{color: Colors.black}}>
                            Continuar com Apple
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{gap:50, marginTop:110, alignItems:'center', alignContent:'center'}}>

                    <Text style={{fontSize:scaleFont(14), textAlign:'center' }}>
                        Ao continuar, você concorda com nossos{" "}
                        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                        Termos de Serviço
                         </Text>{" "}para saber como coletamos, usamos e compartilhamos seus dados.
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/(singup)/register')}>
                        <Text style={{fontSize:scaleFont(14), fontWeight:'bold'}}>
                            Não tem uma conta? Cadastre-se
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea:{
      flex:1
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.white,
    },
    header: {
        marginTop:5,
        marginBottom: 20,
        alignItems: 'flex-start',
        position: 'relative',
    },
    headerText: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        color: Colors.black,
        marginTop: 15
    },
    inputContainer:{
        alignItems: 'center',
    },
    
    input: {
        borderRadius: 8,
        backgroundColor: Colors.lightGrey,
        marginBottom: 20,
        width: scaleWidth(358),
        height: scaleHeight(56),
        padding:16,

    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: Colors.lightGrey,
        marginBottom: 20,
        width: scaleWidth(358),
        height: scaleHeight(56),
        paddingHorizontal: 16,
    },
    passwordInput: {
        flex: 1, // ocupa todo o espaço disponível
        height: "100%",
    },
    loginButton: { 
        borderRadius: 8, 
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        width: scaleWidth(358),
        height: scaleHeight(40),
    },
    othersLoginButton:{
 borderRadius: 8, 
        backgroundColor: Colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        width: scaleWidth(358),
        height: scaleHeight(40),
    },

});

export default Login;