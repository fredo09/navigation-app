import React from 'react';
import { View, Text } from 'react-native';
import { 
  DrawerContentComponentProps, 
  DrawerContentScrollView, 
  DrawerItemList } from '@react-navigation/drawer';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}>

      <View
        className='flex-1 justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-lx bg-primary'>
          <View className='flex-1 justify-center items-center bg-white rounded-full h-24 w-24'>
            <Text className='text-primary font-work-black text-3xl'>F</Text>
          </View>
      </View>

      {/* DreawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
};