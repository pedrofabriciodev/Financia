import { Tabs } from 'expo-router';
import React from 'react';


import { MaterialIcons } from "@expo/vector-icons/";

export default function TabLayout() {

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#121217', // Cor do texto/ícone ativo
    tabBarInactiveTintColor: '#637087', // Cor do texto/ícone inativo
    headerShown: false,
    
    tabBarStyle: {
      borderTopWidth: 1,
      borderBottomWidth: 1    ,
      elevation: 0,
      borderColor:   '#F0F2F5',  
      backgroundColor: '#FFFFFF',
      height: 110,
      justifyContent: 'space-evenly'
    },
    
    tabBarLabelStyle: {
      fontSize: 12,
      marginTop: 4
    },
    tabBarIconStyle: {
      marginTop: 0
    }
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Inicio',
      tabBarIcon: ({ color }) => <MaterialIcons size={32} name="home" color={color} />,

    }}
  />
  <Tabs.Screen
    name="bill"
    options={{
      title: 'Contas',
      tabBarIcon: ({ color }) => <MaterialIcons size={24} name="receipt" color={color} />,
    }}
  />
  {/* <Tabs.Screen
    name="extract"
    options={{
      title: 'Extrato',
      tabBarIcon: ({ color }) => <MaterialIcons size={24} name="insert-chart-outlined" color={color} />,
    }}
  /> */}
</Tabs>

  );
}
