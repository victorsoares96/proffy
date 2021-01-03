import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

interface TextField extends TextInputProps {
  textFieldStyle?: StyleProp<TextStyle>
}

const TextField: React.FC<TextField> = ({ textFieldStyle, ...rest }) => {
  return (
    <TextInput {...rest} style={[styles.textInput, textFieldStyle]} selectionColor='#6a6180' />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fafafc',
    borderColor: '#e6e6f0',
    borderRadius: 8,
    borderWidth: 1,

    width: '100%',
    paddingHorizontal: 20,

    color: '#6a6180'
  }
})

export default TextField;