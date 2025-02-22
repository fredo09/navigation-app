import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: true,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Home'
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products'
                }}
            />

            <Stack.Screen
                name='perfil/index'
                options={{
                    title: 'Profile'
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings'
                }}
            />
        </Stack>
    ) 
}
export default StackLayout;