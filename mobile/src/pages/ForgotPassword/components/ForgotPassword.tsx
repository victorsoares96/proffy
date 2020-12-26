import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import backImg from '../../../assets/images/icons/back-secondary.png';
import proffyBackground from '../../../assets/images/login-background.png';

import Button from '../../../utils/components/Button';

function ForgotPasswordStepOne() {

  const { navigate, goBack } = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.root}>
      
      <View style={styles.imgContainer}>
        <Image source={proffyBackground} />
      </View>

      <KeyboardAvoidingView style={styles.forgotFormContainer} behavior='padding'>
        
        <View>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Image source={backImg} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.forgotTitleContainer}>
          <Text style={styles.forgotTitle}>
            Esqueceu sua senha?
          </Text>
          <Text style={styles.forgotDescription}>
            Não esquenta, {'\n'}vamos dar um jeito nisso.
          </Text>
        </View>

        <View style={styles.forgotFormFields}>
          <TextInput
          keyboardType='email-address'
          placeholder='E-mail' 
          placeholderTextColor='#9c98a6' 
          style={[styles.forgotFormTextInput, { borderRadius: 8 }]} 
          onChangeText={(text) => console.log(text)} />
          
          <Button color='secondary' rippleColor='#ffffff' marginTop={20} onPress={() => navigate('ForgotPasswordFinish')}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Button>
        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
  },
  imgContainer: {
    flexGrow: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotFormContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 20
  },
  forgotTitleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  forgotTitle: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 34,

    marginVertical: 20
  },
  forgotDescription: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,

    marginBottom: 20
  },
  forgotFormFields: {

  },
  forgotFormTextInput: {
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
  backButton: {
    marginLeft: -10,
  }
});

export default ForgotPasswordStepOne;