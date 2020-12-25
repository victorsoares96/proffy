import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Image, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import checkbox_checked from '../../assets/images/checkbox-checked.png';
import checkbox_unchecked from '../../assets/images/checkbox-unchecked.png';

import styles from './styles';

import loginImage from '../../assets/images/login-background.png';
import { BorderlessButton, RectButton, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Login() {
  const [checked, setChecked] = React.useState(false);
  const [visible, changeVisible] = React.useState(false);
  return (
    <ScrollView style={{ backgroundColor: '#e5e5e5' }}>
      <View style={styles.loginImgContainer}>
        <Image source={loginImage} />
      </View>

      <View style={styles.loginFormContainer}>
        <View style={styles.loginTitleContainer}>
          <Text style={styles.loginTitleText}>
            Fazer login
          </Text>

          <TouchableOpacity>
            <Text style={styles.loginTitleCaption}>
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginFormFields}>
          <TextInput 
          keyboardType='email-address'
          placeholder='E-mail' 
          placeholderTextColor='#9c98a6' 
          style={[styles.loginFormTextInput, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]} 
          onChangeText={(text) => console.log(text)} />

          <View style={styles.passwordContainer}>
            <TextInput 
            secureTextEntry={visible ? false : true}
            placeholder='Senha'
            placeholderTextColor='#9c98a6' 
            style={[styles.loginFormTextInput, { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderLeftColor: '#8257e5' }]} 
            onChangeText={(text) => console.log(text)} />

            <BorderlessButton style={styles.passwordShowToggleButton} onPress={() => changeVisible(!visible)}>
              {
                visible ? <Feather name="eye-off" size={24} color="#8257e5" />
                : <Feather name="eye" size={24} color="#9c98a6" />
              }
            </BorderlessButton>
          </View>

          <View style={styles.loginSubContainer}>
            <View style={styles.checkboxContainer}>
              {/*<Checkbox.Android style={styles.checkbox} color='#04d361' uncheckedColor='#ffffff' status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} />*/}
              <TouchableOpacity style={styles.checkbox} onPress={() => setChecked(!checked)}>
                <Image source={checked ? checkbox_checked : checkbox_unchecked} />
              </TouchableOpacity>
              <Text style={styles.rememberMeText}>
                Lembrar-me
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
          
          <RectButton rippleColor='#ffff' style={[styles.button, styles.buttonPrimary]}>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login;