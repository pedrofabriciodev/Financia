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


import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { scaleWidth, scaleHeight, scaleFont } from "@/constants/metrics";

const Register = () => {
      const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const router = useRouter();

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
                    />

                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="default"
                    />

                    <Text style={styles.labelText}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="default"
                    />

                    <Text style={styles.labelText}>Confirmar Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    keyboardType="default"
                    />

                    
                </View>

                <View style={{gap:20}}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/(tabs)/home')} >
                        <Text style={{color: Colors.white, fontWeight:'bold', fontSize:scaleFont(16)}}>
                            Criar Conta
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