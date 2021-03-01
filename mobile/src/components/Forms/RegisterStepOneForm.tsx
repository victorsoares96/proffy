import React, { useState } from 'react';
import {
  Formik,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';
import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import {BorderlessButton, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import TextField from '../TextField';
import {Feather} from '@expo/vector-icons';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/authContext';

interface FormValues {
  name: string;
  surname: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { 
    values,
    errors, 
    isSubmitting, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
  } = props;
  return (
    <KeyboardAvoidingView style={styles.formContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      <Text style={styles.formTitle}>
        01. Quem é você?
      </Text>

      <TextField 
      keyboardType='email-address' 
      placeholder='Nome' 
      placeholderTextColor='#9c98a6'
      value={values.name}
      errorMessage={errors.name}
      textFieldStyle={[
        styles.textInput, { 
          borderTopLeftRadius: 8, 
          borderTopRightRadius: 8 
        }
      ]}
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')} />

      <TextField 
      onChangeText={handleChange('surname')}
      onBlur={handleBlur('surname')}
      placeholder='Sobrenome'
      placeholderTextColor='#9c98a6' 
      value={values.surname}
      errorMessage={errors.name}
      textFieldStyle={[
        styles.textInput, { 
          borderBottomLeftRadius: 8, 
          borderBottomRightRadius: 8, 
          borderLeftColor: '#8257e5' 
        }
      ]} />

      <Button color='primary' loading={false} rippleColor='#ffffff' marginTop={20} activityIndicatorColor='#ffffff' onPress={handleSubmit}>
        <Text style={styles.buttonText}>Próximo</Text>
      </Button>
    </KeyboardAvoidingView>
  );
}

const RegisterStepOneForm: React.FC = () => {

  const { navigate } = useNavigation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required')
  });

  const initialValues: FormValues = {
    name: '',
    surname: ''
  }
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={
      (values, actions) => {
        console.log(values)
        navigate('RegisterStepTwo', { name: values.name, surname: values.surname })
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
});

export default RegisterStepOneForm;
