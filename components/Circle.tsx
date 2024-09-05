import React from 'react';
import { View, ViewStyle } from 'react-native';

interface CircleProps {
  size: number;
  color: string;
  style?: ViewStyle;
}

const Circle: React.FC<CircleProps> = ({ size, color, style }) => {
  return (
    <View
      style={[{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      }, style]}
    />
  );
};

export default Circle;