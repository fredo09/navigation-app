import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

import { CustomDrawer } from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                }
            }}>
            <Drawer.Screen
                name="user/index" //This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color}/>
                    )
                }}
            />
            <Drawer.Screen
                name="Schedule/index"//This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horarios',
                    title: 'Horarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color}/>
                    )
                }}
            />
        </Drawer>
    );
}

export default DrawerLayout;