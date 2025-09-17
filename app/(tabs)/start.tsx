import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import { useSafeAreaInsets } from "react-native-safe-area-context";

const Start = () => {
   const insets = useSafeAreaInsets();

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height; 

return (
  <SafeAreaView style={styles.safeArea} edges={['top']}>
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/firstScreen.png')}
        style={{
          width: screenWidth,
          height: screenHeight * 0.4, 
        }}
        resizeMode="cover"
      />

      <View style={{}}>
        <Text style={styles.textMain}>Bem-vindo à sua jornada financeira</Text>
      </View>

      <View>
        <Text>
          Assuma o controle de suas finanças e alcance seus objetivos com facilidade.
        </Text>
      </View>
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
        paddingTop:5,
        backgroundColor: '#ffffff',
    },
    textMain: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#121217',
        marginRight: 0
    },
    textSecondary:{
      
    },
    input: {
       
        borderRadius: 8,
        width: 358,
        height: 56,
        color: 'black',
        backgroundColor: '#F0F2F5',
        marginBottom: 20

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

export default Start;