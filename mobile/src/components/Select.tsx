import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import RNPickerSelect, { PickerSelectProps, Item } from 'react-native-picker-select';

interface SelectProps extends PickerSelectProps {
  onValueChange: (value: any, index: number) => void
  items: Item[]
  textStyle?: TextStyle,
  containerStyle?: ViewStyle
  iconContainerStyle?: ViewStyle
  iconSize?: number | undefined
  iconColor?: string | typeof OpaqueColorValue | undefined
}
const Select: React.FC<SelectProps> = ({ onValueChange, items, textStyle, containerStyle, iconContainerStyle, iconColor, iconSize, ...rest }) => {
  const [expand, setExpand] = useState(false);
  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      style={{
        inputAndroid: textStyle,
        inputIOS: textStyle,
        inputWeb: textStyle,

        inputAndroidContainer: containerStyle,
        inputIOSContainer: containerStyle,

        iconContainer: iconContainerStyle ? iconContainerStyle : {
          marginTop: 25,
          marginRight: 18,
        },
      }}
      onOpen={() => setExpand(true)}
      onClose={() => setExpand(false)}
      onValueChange={onValueChange}
      items={items}
      Icon={() => <AntDesign name="down" size={iconSize ? iconSize : 12} color={iconColor} style={{ transform: [{ rotate: expand ? '180deg' : '0deg' }] }} />}
      {...rest}
    />
  )
}

export default Select;