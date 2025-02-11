import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5'>
                {/* Forma de usar y ligar los fonts */}
                <Text className='text-3xl text-primary' style={{ fontFamily: 'WorkSans-Black' }}>
                    Hola mundo!! XD 🚀
                </Text>
                {/* Forma de usar y ligar de font s */}
                <Text className='text-2xl font-work-medium text-secundary-100'>
                    Hola mundo!! XD 🚀
                </Text>
                <Text className='text-1xl font-work-light text-tertiary'>
                    Hola mundo!! XD 🚀
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default App;