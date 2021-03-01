import React from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import LoginForm from '../../components/Forms/LoginForm';
import loginImage from '../../assets/images/login-background.png';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.loginImgContainer}>
          <Image source={loginImage}/>
        </View>
        <LoginForm />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login;