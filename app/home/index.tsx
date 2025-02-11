import { Link } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <Text className='mb-5 font-work-black text-2xl'>Home</Text>
        <Link className='mb-5' href='/products'>Products {' '}</Link>
        <Link className='mb-5' href='/profile'>Profile {' '}</Link>
        <Link className='mb-5' href='/settings'>Settings {' '}</Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen