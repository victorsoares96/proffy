import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton, RectButton, ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Image, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Button from '../../../utils/components/Button';
import arrowBack from '../../../assets/images/icons/back-secondary.png';
import stepOne from '../../../assets/images/onboarding-step.png';

function RegisterStepTwo() {
  const { goBack, navigate } = useNavigation();
  const [visible, changeVisible] = React.useState(false);
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <Image style={{ marginHorizontal: -10 }} source={arrowBack} />
        </TouchableOpacity>

        <Image style={{ marginHorizontal: 0, transform: [{ rotate: '180deg' }] }} source={stepOne} />
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>
          Crie sua conta gratuíta
        </Text>
        <Text style={styles.logoDescription}>
          Basta preencher estes dados e você estará conosco.
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.formContainer} behavior='padding'>
        <Text style={styles.formTitle}>
          02. Email e Senha
        </Text>

        <TextInput
        keyboardType='email-address'
        placeholder='E-mail' 
        placeholderTextColor='#9c98a6' 
        style={[styles.textInput, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]} 
        onChangeText={(text) => console.log(text)} />

        <View style={styles.passwordContainer}>
          <TextInput 
          secureTextEntry={visible ? false : true}
          placeholder='Senha'
          placeholderTextColor='#9c98a6' 
          style={[styles.textInput, { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderLeftColor: '#8257e5' }]} 
          onChangeText={(text) => console.log(text)} />

          <BorderlessButton style={styles.passwordShowToggleButton} onPress={() => changeVisible(!visible)}>
            {
              visible ? <Feather name="eye-off" size={24} color="#8257e5" />
              : <Feather name="eye" size={24} color="#9c98a6" />
            }
          </BorderlessButton>
        </View>

        <Button color='secondary' loading={false} rippleColor='#ffffff' marginTop={20} activityIndicatorColor='#ffffff' onPress={() => navigate('RegisterFinish')}>
          <Text style={styles.buttonText}>Concluir cadastro</Text>
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    backgroundColor: '#f0f0f7',
  },
  headerContainer: {
    margin: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 30,
    justifyContent: 'center',
    flex: 1,
  },
  logoTitle: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 42,

    marginBottom: 20
  },
  logoDescription: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24
  },
  formContainer: {
    margin: 30,
    justifyContent: 'center',
    flex: 1,
  },
  formTitle: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,

    marginBottom: 20
  },
  textInput: {
    width: '100%',
    height: 64,
    borderColor: '#e6e6f0',
    borderWidth: 1,
    backgroundColor: '#fafafc',
    paddingHorizontal: 24
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,

    textAlign: 'center'
  },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  passwordShowToggleButton: { 
    right: 50, 
    position: 'relative' 
  },
});

export default RegisterStepTwo;