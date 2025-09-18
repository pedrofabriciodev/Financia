import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// import styles from "./billStyle";
// import Octicons from "react-native-vector-icons/Octicons"

import { MaterialIcons, Octicons } from "@expo/vector-icons";

import BillsComponents from "@/components/BillsComponents";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const Bill = () => {
   const insets = useSafeAreaInsets();

    return(
         <SafeAreaView style={styles.safeArea } edges={['top']}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> 
                <View style={styles.container}>
                    
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerIcon} onPress={()=> router.push('/(tabs)/home')}>
                            <MaterialIcons name="arrow-back" size={28}/>
                        </TouchableOpacity>

                        <Text style={styles.headerText}>
                            Contas
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.sectionTittle}>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginRight: 0
    },
    sectionTittle:{
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 12, 
        color: Colors.black },
});

export default Bill;