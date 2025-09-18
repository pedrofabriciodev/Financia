import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet 
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// import styles from "./billStyle";
// import Octicons from "react-native-vector-icons/Octicons"

import { MaterialIcons, Octicons } from "@expo/vector-icons";

import BillsComponents from "@/components/BillsComponents";
import Colors from "@/constants/Colors";

const Bill = () => {
   const insets = useSafeAreaInsets();

    return(
         <SafeAreaView style={styles.safeArea } edges={['top']}>
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
                        <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 12, color: Colors.black }}>
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
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginRight: 0
    },
});

export default Bill;