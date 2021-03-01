import React, { useState } from 'react';
import {
  Formik,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';
import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import {BorderlessButton, TouchableOpacity} from 'react-native-gesture-handler';
import TextField from '../TextField';
import {Feather} from '@expo/vector-icons';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/authContext';

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { 
    errors, 
    isSubmitting, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    setFieldValue 
  } = props;
  const { navigate } = useNavigation();
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.loginTitleContainer}>
        <Text style={styles.loginTitleText}>
          Fazer login
        </Text>
        
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.loginTitleCaption}>
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginFormFields}>
        <TextField 
        keyboardType='email-address' 
        placeholder='E-mail' 
        placeholderTextColor='#9c98a6'
        errorMessage={errors.email}
        textFieldStyle={[
          styles.loginFormTextInput, {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }
        ]}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')} />
              
        <View style={styles.passwordContainer}>
          <TextField 
          secureTextEntry={visiblePassword ? false : true}
          placeholder='Senha'
          placeholderTextColor='#9c98a6'
          errorMessage={errors.password}
          style={[
            styles.loginFormTextInput, {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderLeftColor: '#8257e5'
            }
          ]}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')} />

          <BorderlessButton 
          style={styles.passwordShowToggleButton}
          onPress={() => setVisiblePassword(!visiblePassword)}>
            {
              visiblePassword ? (
                <Feather 
                name="eye-off"
                size={24}
                color="#8257e5" />
              ) : (
                <Feather 
                name="eye"
                size={24}
                color="#9c98a6" />
              )
            }
          </BorderlessButton>
        </View>

        <View style={styles.loginSubContainer}>
          <Checkbox 
          label='Lembrar-me'
          labelStyle={styles.rememberMeText}
          onChange={(checked) => setFieldValue('rememberMe', checked)} />

          <TouchableOpacity 
          onPress={() => navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>

        <Button 
        color='secondary'
        loading={isSubmitting}
        rippleColor='#ffffff'
        marginTop={20}
        activityIndicatorColor='#ffffff'
        onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </Button>
      </View>
    </View>
  );
}

const LoginForm: React.FC = () => {

  const { signIn } = useAuth();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Invalid password').required('Required')
  });

  const initialValues: FormValues = {
    email: '',
    password: '',
    rememberMe: false
  }
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={
      (values, actions) => {
        signIn(values.email, values.password);
        actions.setSubmitting(false);
        actions.resetForm();
      }
    }
    validateOnBlur={false}
    validateOnChange={false}
    validationSchema={validationSchema}
    component={InnerForm} />
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    //backgroundColor: 'red'
    //paddingVertical: 50,
  },
  loginTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  loginTitleText: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 34
  },
  loginTitleCaption: {
    color: '#8257e5',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'right'
  },
  loginFormFields: {

  },
  loginFormTextInput: {
    width: '100%',
    height: 64,
    borderColor: '#e6e6f0',
    borderWidth: 1,
    backgroundColor: '#fafafc',
    paddingHorizontal: 24
  },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  passwordShowToggleButton: { 
    right: 50, 
    position: 'relative' 
  },
  loginSubContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rememberMeText: {
    color: '#9c98a6',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,
  },
  forgotPasswordText: {
    color: '#9c98a6',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,

    textAlign: 'right'
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 20
  },
  buttonPrimary: {
    backgroundColor: '#04d361'
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,

    textAlign: 'center'
  }
});

export default LoginForm;
