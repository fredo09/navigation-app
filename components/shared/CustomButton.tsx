import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  children: string;
  className?: string; 
  variant?: 'contained' | 'text-only';
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const CustomButton = React.forwardRef(
  ({ 
    children,
    className,
    color = 'primary', 
    onPress, 
    onLongPress, 
    variant = 'contained' }: Props, ref: React.Ref<View>) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary'
    }[color];

    const textColor = {
      primary : 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary'
    }[color]

    if (variant === 'text-only') {
      return (
        <Pressable
          ref={ref}
          onPress={onPress}
          onLongPress={onLongPress}
          className={`p-3 ${className}`}>
            <Text className={`text-center ${textColor} font-work-medium`}>
              {children}
            </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 rounded-dm ${btnColor} active:opacity-90 ${className}`}>
          <Text className='text-white text-center font-work-medium'>
            {children}
          </Text>
      </Pressable>
    );
  }
)