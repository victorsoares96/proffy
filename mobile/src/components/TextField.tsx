import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View } from 'react-native';

interface TextField extends TextInputProps {
  textFieldStyle?: StyleProp<TextStyle>
  accessoryRight?: ReactNode
  errorMessage?: string | undefined
}

const TextField: React.FC<TextField> = ({ textFieldStyle, accessoryRight, errorMessage, ...rest }) => {
  return (
    <View style={[styles.container, { marginTop: errorMessage ? -20 : 0 }]}>
      <View style={{ width: '100%' }}>
        {errorMessage && <Text style={styles.textError}>{errorMessage}</Text>}
        <TextInput {...rest} style={[styles.textInput, textFieldStyle, { paddingTop: errorMessage ? 15 : 0 }]} selectionColor='#6a6180' />
      </View>
      {accessoryRight}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textError: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    lineHeight: 20,

    color: '#e83f5b',
    position: 'relative',
    top: 30,
    paddingHorizontal: 25,
    zIndex: 1
  },
  textInput: {
    backgroundColor: '#fafafc',
    borderColor: '#e6e6f0',
    borderWidth: 1,
    height: 64,
    width: '100%',
    paddingHorizontal: 20,

    color: '#6a6180'
  }
})

export default TextField;