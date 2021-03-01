import React, { ReactNode } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { RectButton, BaseButtonProperties, RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonInterface extends BaseButtonProperties, RectButtonProperties {
  color: string
  loading?: boolean
  disabled?: boolean
  activityIndicatorColor?: string | undefined
  margin?: string | number | undefined
  marginLeft?: string | number | undefined
  marginRight?: string | number | undefined
  marginTop?: string | number | undefined
  marginBottom?: string | number | undefined
  rippleColor?: string | undefined
  children: ReactNode
}

function Button({ 
  color, 
  loading,
  activityIndicatorColor,
  margin, 
  marginLeft, 
  marginRight, 
  marginTop, 
  marginBottom, 
  rippleColor, 
  children, 
  ...rest 
}: ButtonInterface) {
  return (
    <RectButton 
    enabled={loading ? false : true}
    rippleColor={rippleColor} 
    style={[
      styles.button, 
      loading ? { backgroundColor: '#dcdce5' } : colorButton[color], { 
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }
    ]}
    {...rest}>
      {loading && <ActivityIndicator style={styles.activityIndicator} color={activityIndicatorColor} />}
      {children}
    </RectButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonPrimary: {
    backgroundColor: '#8257e5'
  },
  buttonSecondary: {
    backgroundColor: '#04d361'
  },
  buttonError: {
    backgroundColor: '#ef233c'
  },
  activityIndicator: {
    marginRight: 20
  }
});

const colorButton: any = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
  error: styles.buttonError,
}

export default Button;