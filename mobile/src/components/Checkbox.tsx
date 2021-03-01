import React, { useEffect, useState } from 'react';
import { Image, StyleProp, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import checkbox_checked from '../assets/images/checkbox-checked.png';
import checkbox_unchecked from '../assets/images/checkbox-unchecked.png';

interface CheckboxProps {
  value?: boolean
  onChange?(checked: boolean | undefined): void
  defaultValue?: boolean
  label?: string | undefined
  labelStyle?: StyleProp<TextStyle>
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, defaultValue, label, labelStyle }) => {
  const [checked, setChecked] = useState<boolean | undefined>(defaultValue);

  useEffect(() => {
    onChange ? onChange(checked) : ''
  }, [checked]);

  useEffect(() => {
    setChecked(value);
  }, [value]);
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity style={styles.checkbox} onPress={() => setChecked(!checked)}>
        <Image source={checked ? checkbox_checked : checkbox_unchecked} />
      </TouchableOpacity>
      <Text style={labelStyle}>
        {label}
      </Text>
    </View>
  )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rememberMeText: {
    color: '#9c98a6',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    marginRight: 10
  },
});

export default Checkbox;