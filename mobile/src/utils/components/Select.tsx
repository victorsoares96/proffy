import React from 'react';
import { Image, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import RNPickerSelect, { PickerSelectProps, PickerStyle, Item } from 'react-native-picker-select';

import filterExpandIcon from '../../assets/images/icons/filter-expand-icon.png';

interface SelectProps extends PickerSelectProps {
  onValueChange: (value: any, index: number) => void
  items: Item[]
  textStyle?: TextStyle,
  containerStyle?: ViewStyle
  iconContainerStyle?: ViewStyle
}
const Select: React.FC<SelectProps> = ({ onValueChange, items, textStyle, containerStyle, iconContainerStyle, ...rest }) => {
  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      style={{
        inputAndroid: textStyle,
        inputIOS: textStyle,

        inputAndroidContainer: containerStyle,
        inputIOSContainer: containerStyle,

        iconContainer: iconContainerStyle,
      }}
      onValueChange={onValueChange}
      items={items}
      Icon={() => <Image style={{ marginLeft: 'auto', transform: [{ rotate: '180deg' }] }} source={filterExpandIcon} />}
      {...rest}
    />
  )
}

export default Select;