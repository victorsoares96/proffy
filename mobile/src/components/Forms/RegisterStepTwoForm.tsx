import React, { useState } from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import TextField from '../TextField';
import {Feather} from '@expo/vector-icons';
import Button from '../Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../contexts/authContext';

interface FormValues {
  name?: string;
  surname?:string;
  email: string;
  password: string;
}

type RegisterStepTwoFormRouteProp = RouteProp<{ StepTwo: { name: string; surname: string; } }, 'StepTwo'>;

const InnerForm = (props: FormikProps<FormValues>) => {
  const { 
    values,
    errors, 
    isSubmitting, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
  } = props;

  const [visiblePassword, changeVisible] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.formContainer} behavior='padding'>
        <Text style={styles.formTitle}>
          02. Email e Senha
        </Text>
        <TextField 
        keyboardType='email-address' 
        placeholder='E-mail' 
        placeholderTextColor='#9c98a6'
        errorMessage={errors.email}
        textFieldStyle={[
          styles.textInput, { 
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
          value={values.password}
          placeholderTextColor='#9c98a6'
          errorMessage={errors.password}
          style={[
            styles.textInput, {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderLeftColor: '#8257e5'
            }
          ]}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')} />
          
          <BorderlessButton style={styles.passwordShowToggleButton} onPress={() => changeVisible(!visiblePassword)}>
            {
              visiblePassword ? <Feather name="eye-off" size={24} color="#8257e5" />
              : <Feather name="eye" size={24} color="#9c98a6" />
            }
          </BorderlessButton>
        </View>

        <Button color='secondary' loading={isSubmitting} rippleColor='#ffffff' marginTop={20} activityIndicatorColor='#ffffff' onPress={handleSubmit}>
          <Text style={styles.buttonText}>Concluir cadastro</Text>
        </Button>
      </KeyboardAvoidingView>
  );
}

const RegisterStepTwoForm: React.FC = () => {

  const { params } = useRoute<RegisterStepTwoFormRouteProp>();
  const { navigate } = useNavigation();
  const { storeUser } = useAuth();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  });

  const initialValues: FormValues = {
    name: params.name,
    surname: params.surname,
    email: '',
    password: ''
  }

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    /*navigate('RegisterStepTwo', { 
      name: values.name + ' ' + values.surname,
      email: values.email,
      password: values.password
    })*/
    try {
      //await storeUser(values.name + ' ' + values.surname, values.email, values.password);
      //actions.resetForm();
      navigate('RegisterFinish');
    } catch (error) {
      console.log(error);
    } finally {
      actions.setSubmitting(false);
    }    
  }
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validateOnBlur={false}
    validateOnChange={false}
    validationSchema={validationSchema}
    component={InnerForm} />
  );
};

const styles = StyleSheet.create({
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

export default RegisterStepTwoForm;
