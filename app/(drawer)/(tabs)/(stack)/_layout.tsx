import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';

const StackLayout = () => {

    const navigation = useNavigation();
    const router = useRouter();

    const onToggleDrawer = (canGoBack: Boolean) => {
        if (canGoBack) {
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    };

    return (
        <Stack
            screenOptions={{
                headerShadowVisible: true,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack = false}) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'} 
                        size={20} 
                        className='mr-5' 
                        onPress={() => onToggleDrawer(canGoBack)}/>
                )
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