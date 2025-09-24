import {
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Platform,
  StatusBar 
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";


import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons/";

import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { useAuth } from "@/contexts/AuthContext";


const Dashboard = () => {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const {user} = useAuth();

    return (
        <SafeAreaView style={styles.safeArea } edges={['top']}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem Vindo, {user?.user_metadata.name.split(" ")[0]}!</Text>
                    <TouchableOpacity style={{position:'absolute', right:16}}><MaterialIcons name="settings" size={24} onPress={()=> router.push('/settings')}/></TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Resumo Mensal</Text>

                    <View style={styles.cardComponent}> 

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

                    <View style={styles.cardComponent}>

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
                    <MaterialIcons name="add" size={32} color={Colors.white}/>
                </TouchableOpacity>

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
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginRight: 0
    },
    section: {
        marginBottom: 24
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
        color: Colors.black
    },
    cardComponent:{ 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    card: {
        backgroundColor: Colors.lightGrey,
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
        color: Colors.black,
        marginBottom: 4
    },
    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black
    },
    addButton: { 
        borderRadius: 35, 
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 45,
        width: 70,
        height: 70,
        right: 20,// ou ajuste conforme altura do tabBar
    },

    miniCard: {
        backgroundColor: Colors.lightGrey,
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
        color: Colors.black
    },
});

export default Dashboard;