import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';

import { products } from '@/store';

const DetailProduct = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const product = products.find((item) => item.id === id );

    //* Asignacion de nombre del producto por id
    useEffect(() => {
        navigation.setOptions({
            title: product?.title ?? 'Product'
        })
    }, [product]);
    
    if (!product) {
        return <Redirect href='/' />
    }

    return (
        <View className='px-5 mt-10'>
            <Text className='font-work-black text-2xl'>{product?.title}</Text>
            <Text className=''>{product?.description}</Text>
            <Text className='font-work-black'>{product?.price}</Text>
        </View>
    )
}

export default DetailProduct;