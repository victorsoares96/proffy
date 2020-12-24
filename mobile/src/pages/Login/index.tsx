import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';
import styles from './styles';

import loginImage from '../../assets/images/login-background.png';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function Login() {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginImgContainer}>
        <Image source={loginImage} />
      </View>

      <View style={styles.loginFormContainer}>
        <View style={styles.loginTitleContainer}>
          <Text style={styles.loginTitleText}>
            Fazer login
          </Text>

          <Text style={styles.loginTitleCaption}>
            Criar uma conta
          </Text>
        </View>

        <View style={styles.loginFormFields}>
          <TextInput 
          keyboardType='email-address'
          placeholder='E-mail' 
          placeholderTextColor='#9c98a6' 
          style={[styles.loginFormTextInput, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]} 
          onChangeText={(text) => console.log(text)} />

          <TextInput 
          secureTextEntry={true}
          placeholder='Senha' 
          placeholderTextColor='#9c98a6' 
          style={[styles.loginFormTextInput, { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderLeftColor: '#8257e5' }]} 
          onChangeText={(text) => console.log(text)} />
        </View>
      </View>

    </ScrollView>
  )
}

export default Login;