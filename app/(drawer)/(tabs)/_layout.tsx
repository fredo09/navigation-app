import React from 'react';
import { Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ 
                tabBarActiveTintColor: 'indigo', 
                //tabBarActiveBackgroundColor: 'blue'
            }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: ' Stack',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="pencil" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color}/>,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;