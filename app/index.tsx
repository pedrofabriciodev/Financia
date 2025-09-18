import { router } from "expo-router";
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/constants/Colors";


import { useSafeAreaInsets } from "react-native-safe-area-context";

const Start = () => {
   const insets = useSafeAreaInsets();

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height; 
    // console.log(screenWidth)
    // console.log(screenHeight)

return (
  <SafeAreaView style={styles.safeArea} edges={['top']}>
    <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
    
    <View style={styles.container}>
      <Image
        source={require('../assets/images/firstScreen.png')}
        style={{
          width: screenWidth,
          height: screenHeight * 0.4, 
        }}
        resizeMode="cover"
      />

      <View style={styles.containerMain}>
        <Text style={styles.textMain}>Bem-vindo à sua jornada financeira</Text>
      </View>

      <View>
        <Text style={styles.textSecondary}>
          Assuma o controle de suas finanças e alcance seus objetivos com facilidade.
        </Text>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={() => router.push('/(auth)/(singin)/login')}>
        <Text style={{color: Colors.white}}>Comece</Text>
      </TouchableOpacity>
    


    </View>
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        paddingTop:0
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    containerMain:{
        marginBottom:8, 
        marginTop:16
    },
    textMain: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign:'center',

    },
    textSecondary:{
      fontSize: 16,
      fontWeight: 'regular',
      color: Colors.black,
      textAlign:'center',

    },
    startButton: { 
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

});

export default Start;