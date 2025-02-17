import React from 'react';
import { Link, router } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

import { CustomButton } from '@/components/shared/CustomButton';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <Text className='mb-5 font-work-black text-2xl'>Home</Text>
        {/* <Link className='mb-5' href='/products'>Products {' '}</Link>
        <Link className='mb-5' href='/profile'>Profile {' '}</Link>
        <Link className='mb-5' href='/settings'>Settings {' '}</Link> */}

        {/* Forma de crear un custom button para una navegacion */}
        <CustomButton 
          color="primary"
          className='mb-2'
          onPress={() => router.push('/tabs/(stack)/products')}>
            Productos
        </CustomButton>

        {/* Forma de crear un custom button para una navegacion */}
        <CustomButton 
          color="secondary"
          className='mt-2'
          onPress={() => router.push('/tabs/(stack)/profile')}>
            Perfil
        </CustomButton>

        {/* Forma de crear un custom button para una navegacion */}
        <CustomButton 
          color="tertiary"
          className='mt-2'
          onPress={() => router.push('/tabs/(stack)/settings')}>
            Settings
        </CustomButton>

        {/* Forma de usar el custom button dentro de un link para la navegacion */}
        <Link className='mb-5' href='/tabs/(stack)/products' asChild>
          <CustomButton
            className='mt-2'
            variant='text-only'
            color="primary">
              Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;