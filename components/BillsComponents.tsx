import Colors from "@/constants/Colors";
import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface BillsComponentsProps{
    cost: string;
    nameBill: string;
    description: string;
    typeIcon: ReactNode;
}

const BillsComponents: React.FC<BillsComponentsProps> = ({typeIcon, cost, nameBill, description}) =>{
    return(
        <View style={styles.main}>
            
            <View style={styles.icon}>
                
                {typeIcon}
            </View>

            <View style={{flex:1 }}>
                <Text style={styles.nameBillText}>{nameBill}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
                
            <Text style={styles.costText}>{cost}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row', 
        backgroundColor: Colors.white, 
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    icon:{
        backgroundColor: Colors.lightGrey, 
        height: 48, 
        width: 48, 
        borderRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: 12 
    },
    nameBillText:{
        fontSize: 16, 
        color: Colors.black, 
        marginBottom: 4
    },
    descriptionText:{
        fontSize: 12, 
        color: Colors.grey
    },
    costText:{
        fontSize: 16, 
        color: Colors.black, 
    }


});

export default BillsComponents;
