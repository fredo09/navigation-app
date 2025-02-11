import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  color?: 'primary' | 'sencondary' | 'tertiary';
  children: string;
}

export const CustomButton = ({ children, color = 'primary', onPress, onLongPress }: Props) => {
  const btnColors = {
    primary: 'bg-primary',
    sencondary: 'bg-sencondary',
    tertiary: 'bg-tertiary'
  }[color];

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded ${btnColors} active:opacity-90`}
      >
        <Text className='text-white text-center'>{children}</Text>
    </Pressable>
  )
}