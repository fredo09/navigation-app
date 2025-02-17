import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { products } from '@/store';
import { Link } from 'expo-router';

const ProductsScreeen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mt-5'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>

            <View className='flex flex-row justify-between'>
              <Text className='font-work-black'>{item.price}</Text>
              <Link href={`/tabs/(stack)/products/${item.id}`} className='text-primary'>
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ProductsScreeen