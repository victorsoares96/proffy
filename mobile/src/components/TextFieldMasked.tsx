import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

interface TextField extends TextInputMaskProps {
  textFieldStyle?: StyleProp<TextStyle>
}

const TextFieldMasked: React.FC<TextField> = ({ textFieldStyle, ...rest }) => {
  return (
    <TextInputMask style={[styles.textInput, textFieldStyle]} {...rest} selectionColor='#6a6180' />
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

export default TextFieldMasked;