import { 
  SafeAreaView,
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Platform,
  StatusBar 
} from "react-native";


import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons/";

import { useRouter } from "expo-router";


const Dashboard = () => {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <SafeAreaView style={[styles.safeArea, {paddingTop: insets.top},]}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem Vindo</Text>
                    <TouchableOpacity style={{position:'absolute', right:16}}><MaterialIcons name="settings" size={24}/></TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Resumo Mensal</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}> 

                        <View style={styles.card}>
                            <Text style={styles.cardLabel}>Total Recebido</Text>
                            <Text style={styles.cardValue}>R$ 5.500</Text>
                        </View>
                        
                        <View style={styles.card}>
                            <Text style={styles.cardLabel}>Gastos Totais</Text>
                            <Text style={styles.cardValue}>R$ 2.200</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contas A Pagar</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

                        <TouchableOpacity style={styles.miniCard}>
                            <Text style={styles.miniCardText}>Esta Semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.miniCard}>
                            <Text style={styles.miniCardText}>Próxima Semana</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.miniCard}>
                            <Text style={styles.miniCardText}>Próximo Mês</Text>
                        </View> */}
                        <TouchableOpacity style={styles.miniCard}>
                            <Text style={styles.miniCardText}>Pagos</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity style={styles.addButton} onPress={() => router.push('/addBills')} >
                    <MaterialIcons name="add" size={32} color={'white'}/>
                </TouchableOpacity>


                {/* <View style={styles.footer}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                      <MaterialIcons name="home" size={32}/> 
                      <Text>Inicio</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                          <MaterialIcons name="receipt" size={24} /> 
                          <Text>Contas</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{alignItems: 'center'}}>
                      <MaterialIcons name="insert-chart-outlined" size={24} /> 
                      <Text>Extrato</Text>
                  </TouchableOpacity>  
                </View> */}
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea:{
      flex:1,
  // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  // backgroundColor: '#fff',

    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 0
    },
    section: {
        marginBottom: 24
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
        color: '#2c3e50'
    },
    card: {
        backgroundColor: '#F0F2F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowRadius: 3,
        elevation: 2,
        width: 171,
        height:110

    },
    cardLabel: {
        fontSize: 14,
        color: '#121217',
        marginBottom: 4
    },
    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#121217'
    },
    addButton: { 
        borderRadius: 35, 
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 45,
        width: 70,
        height: 70,
        right: 20,// ou ajuste conforme altura do tabBar
    },
    addButtonText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },


    miniCard: {
        backgroundColor: '#F0F2F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowRadius: 3,
        elevation: 2,
        width: '30%',
        height: 32,
    },
    miniCardText: {
        fontSize: 14,
        color: '#121217'
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
        height: 73
  },
});

export default Dashboard;