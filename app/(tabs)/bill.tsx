import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// import styles from "./billStyle";
// import Octicons from "react-native-vector-icons/Octicons"

import { MaterialIcons, Octicons } from "@expo/vector-icons";

import BillsComponents from "@/components/BillsComponents";

const Bill = () => {
   const insets = useSafeAreaInsets();

    return(
        <SafeAreaView style={[styles.safeArea, {paddingTop: insets.top}]}>
                <View style={styles.container}>
                    
                    <View style={styles.header}>
                        <TouchableOpacity style={{position:'absolute', left:10}}>
                            <MaterialIcons name="arrow-back" size={28}/>
                        </TouchableOpacity>

                        <Text style={styles.headerText}>
                            Contas
                        </Text>
                    </View>

                    <View>
                        <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 12, color: '#2c3e50' }}>
                            A Vencer
                        </Text>
                    </View>

                   <BillsComponents typeIcon={<MaterialIcons name="lightbulb-outline" size={24}/>} cost="R$ 200" nameBill="Luz" description="Vence em 3 dias"/>
                   <BillsComponents typeIcon={<MaterialIcons name="wifi" size={24}/>} cost="R$ 80" nameBill="Internet" description="Vence hoje"/>

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
        backgroundColor: '#ffffff',
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

export default Bill;