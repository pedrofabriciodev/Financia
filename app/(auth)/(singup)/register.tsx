import { useState } from "react";

import {
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  TextInput,
  Dimensions,
  StatusBar,
  Alert
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons/";


import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { scaleWidth, scaleHeight, scaleFont } from "@/constants/metrics";
import { supabase } from "@/lib/supabase";

const Register = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [loading, setLoading] = useState(false);


    async function handleSingUp(){
      setLoading(true);

     if (!name || !email || !password || !confirmPassword) {
        Alert.alert('Error', "Preencha todos os campos!!")
        setLoading(false)
        return;
      }

      if(password != confirmPassword ){
        Alert.alert('Error', "As senhas são diferentes!")
        setLoading(false)
        return;
      }

      if(password.length<6){
        Alert.alert('Error', "A senha precisa ter no minimo 6 digitos!")
        setLoading(false)
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            name: name
          } 
        },
      })  

      if(error){
        Alert.alert('Error', error.message)
        setLoading(false)
        return;

      }

      router.replace('/(tabs)/home')
    } 

    return (
        <SafeAreaView style={styles.safeArea } edges={['top']}>
          <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
            <View style={styles.container}>
                 <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIcon} onPress={()=> router.back()}>
                        <MaterialIcons name="arrow-back" size={28}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>
                        Criar Conta
                    </Text>
                  </View>

               <View> 
                  <Text style={styles.labelText}>Nome Completo</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    keyboardType="default"
                    value={name}
                    onChangeText={setName}
                    />

                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="default"
                    value={email}
                    onChangeText={setEmail}
                    />

                    <Text style={styles.labelText}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="default"
                    value={password}
                    onChangeText={setPassword}
                    />

                    <Text style={styles.labelText}>Confirmar Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    keyboardType="default"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    />

                    
                </View>

                <View style={{gap:20}}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSingUp} >
                        <Text style={{color: Colors.white, fontWeight:'bold', fontSize:scaleFont(16)}}>
                             {loading ? "Carregando.. " : "Criar Conta"}
                        </Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:scaleFont(14), fontWeight:'regular', color: Colors.grey, textAlign:'center'}}>
                        Já tem uma conta?
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/(singin)/login')}>
                      <Text style={{fontSize:scaleFont(14), fontWeight:'regular', color: Colors.grey, textAlign:'center'}}>
                        Entrar
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
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 40,
        alignItems: 'center',
    },
    headerIcon:{
        position:'absolute', 
        left:10
    },
    headerText: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: Colors.black,
    },
    labelText:{
      fontSize:scaleFont(16), 
      fontWeight:'medium', 
      color:Colors.black
    },
    inputContainer:{
        alignItems: 'center',
    },
    
    input: {
      borderWidth:1,
      borderRadius: 8,
      borderColor: Colors.grey,
      backgroundColor: Colors.white,
      marginBottom: 20,
      marginTop:8,
      width: scaleWidth(358),
      height: scaleHeight(56),
      padding:16

    },
    loginButton: { 
        borderRadius: 8, 
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        width: scaleWidth(358),
        height: scaleHeight(48),
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

export default Register;