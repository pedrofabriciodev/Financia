import { router, Stack } from "expo-router"

import {AuthProvider, useAuth} from '../contexts/AuthContext'
import { use, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function RootLayout(){
    return(
        <AuthProvider>
            <MainLayout/>
        </AuthProvider>
    )
}

function MainLayout(){

    const {setAuth} = useAuth()

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session user', session?.user)
            if(session){
                setAuth(session.user)
                router.replace('/(tabs)/home')
                return;
            }

            setAuth(null)
            router.replace('/')
        })
    }, [])


    return(
         <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="index" 
            />
            <Stack.Screen 
                name="(auth)/(singup)/register" 
            />
            <Stack.Screen 
                name="(auth)/(singin)/login" 
            />
        </Stack>
    )
}
