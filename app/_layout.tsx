import React, { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

import './global.css';

//! Evita que el SplashScreen se quite hasta que se cargen las funetes
SplashScreen.preventAutoHideAsync();

const RootLayout = () =>  {
    const [ fontsLoaded, error ] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync(); //! -> Ocultamos el SplashScreen
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error ) return null;

    return <Slot/>;
};

export default RootLayout;