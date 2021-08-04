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
import Select from '../Select';
import TextFieldMasked from '../TextFieldMasked';
import TimePickerSelect from '../TimePickerSelect';

interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  cost: string;
  schedule: any[];
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { 
    values,
    errors, 
    isSubmitting, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    setFieldValue
  } = props;
  return (
    <View style={{ backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#e6e6f0', borderWidth: 1, marginHorizontal: 20, marginTop: -40, marginBottom: 40 }}>
      <View style={{ margin: 25 }}>
        <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
          Seus dados
        </Text>
        <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10 }} />
      </View>

      <View style={{ marginHorizontal: 25, justifyContent: 'center', alignItems: 'flex-start', flex: 1 }}>
        <View style={{ width: '100%' }}>
          <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
            Nome
          </Text>
          <TextField 
          placeholder='Nome' 
          placeholderTextColor='#9c98a6'
          value={values.name}
          errorMessage={errors.name}
          textFieldStyle={[
            styles.textInput, { 
              borderRadius: 8, 
            }
          ]}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')} />

          <Text style={{ marginTop: 20, marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
            Sobrenome
          </Text>
          <TextField 
          placeholder='Sobrenome' 
          placeholderTextColor='#9c98a6'
          value={values.surname}
          errorMessage={errors.surname}
          textFieldStyle={[
            styles.textInput, { 
              borderRadius: 8, 
            }
          ]}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')} />

          <Text style={{ marginTop: 20, marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
            E-mail
          </Text>
          <TextField 
          placeholder='E-mail' 
          placeholderTextColor='#9c98a6'
          value={values.email}
          errorMessage={errors.email}
          textFieldStyle={[
            styles.textInput, { 
              borderRadius: 8, 
            }
          ]}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')} />
          
          <Text style={{ marginTop: 20, marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
            Whatsapp
          </Text>
          <TextFieldMasked 
          type='cel-phone' 
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }} 
          placeholder='Ex: (85) 99132-5433'
          onChangeText={handleChange('phone')} 
          onBlur={handleBlur('phone')}
          value={values.phone} 
          textFieldStyle={{ height: 56 }} />
          
          <Text style={{ marginTop: 20, marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
            Bio
          </Text>
          <TextField 
          multiline
          numberOfLines={20} 
          maxLength={1000}
          textFieldStyle={[{ height: 100, borderRadius: 8, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }]} 
          placeholder='Fale sobre você...' />
          </View>

          <View style={{ width: '100%', paddingVertical: 20 }}>
            <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
              Sobre a aula
            </Text>
            <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20 }} />

            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Matéria</Text>
            <Select
            doneText='Selecionar'
            textStyle={{ fontFamily: 'Poppins_400Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'normal',
        
            borderRadius: 8,
            borderColor: '#e6e6f0',
            borderWidth: 1,
            color: '#c1bccc',
            backgroundColor: '#fafafc',
            height: 54,
            paddingHorizontal: 16,
            marginTop: 4,
            marginBottom: 16 }}
            iconContainerStyle={{
              marginTop: 25,
              marginRight: 18,
            }}
            placeholder={{ label: 'Selecione', value: '' }}
            onValueChange={handleChange('subject')}
            items={[
              { label: 'Segunda', value: 1, inputLabel: 'Segunda' },
              { label: 'Terça', value: 2, inputLabel: 'Terça' },
              { label: 'Quarta', value: 3, inputLabel: 'Quarta' },
              { label: 'Quinta', value: 4, inputLabel: 'Quinta' },
              { label: 'Sexta', value: 5, inputLabel: 'Sexta' },
              { label: 'Sábado', value: 6, inputLabel: 'Sábado' },
              { label: 'Domingo', value: 7, inputLabel: 'Domingo' },
            ]} />
            
            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>
              Custo da sua hora por aula
            </Text>
            <TextFieldMasked
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$ ',
              suffixUnit: ''
            }}
            placeholder='R$ 0,00'
            onChangeText={handleChange('cost')} 
            value={values.cost} 
            textFieldStyle={{ height: 56 }} />
          </View>

          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
                Horários disponíveis
              </Text>
              <TouchableOpacity onPress={() => setFieldValue('schedule', [...values.schedule, 1])}>
                <Text style={{ color: '#8257e5' }}>+ Novo</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20 }} />

            {values.schedule.map((item, index) => <ScheduleItem key={index} />)}
          </View>
        </View>

        <View style={{ backgroundColor: '#fafafc', height: 150, borderRadius: 8 }}>
          <View style={{ borderColor: '#e6e6f0', borderWidth: 1 }} />
          <View style={{ justifyContent: 'space-evenly', alignItems: 'flex-start', height: '100%', marginHorizontal: 25 }}>
            <Button color='secondary' onPress={handleSubmit}>
              <Text style={{ fontFamily: 'Archivo_600SemiBold', fontSize: 16, lineHeight: 26, color: '#ffffff' }}>
                Salvar cadastro
              </Text>
            </Button>
          </View>
        </View>    
    </View>
  );
}

const ScheduleItem: React.FC = () => {
  return (
    <>
      <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Dia da semana</Text>
        <Select
        textStyle={{ fontFamily: 'Poppins_400Regular',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 'normal',
        
          borderRadius: 8,
          borderColor: '#e6e6f0',
            borderWidth: 1,
            color: '#c1bccc',
            backgroundColor: '#fafafc',
            height: 54,
            paddingHorizontal: 16,
            marginTop: 4,
            marginBottom: 16 }}
            iconContainerStyle={{
              marginTop: 18,
              marginRight: 18
            }}
            placeholder={{ label: 'Selecione', value: 'Selecione' }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Segunda', value: 1, inputLabel: 'Segunda' },
              { label: 'Terça', value: 2, inputLabel: 'Terça' },
              { label: 'Quarta', value: 3, inputLabel: 'Quarta' },
              { label: 'Quinta', value: 4, inputLabel: 'Quinta' },
              { label: 'Sexta', value: 5, inputLabel: 'Sexta' },
              { label: 'Sábado', value: 6, inputLabel: 'Sábado' },
              { label: 'Domingo', value: 7, inputLabel: 'Domingo' },
            ]} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '45%' }}>
                <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Das</Text>
                <TimePickerSelect
                  selectStyle={{
                    height: 54,
                    borderRadius: 8,
                    borderColor: '#e6e6f0',
                    borderWidth: 1,
                    backgroundColor: '#fafafc',
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                  placeholderText='Selecione' 
                  placeholderTextColor='#c1bccc' 
                  onChangeDate={date => console.log(date)} />
              </View>

              <View style={{ width: '45%' }}>
                <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Até</Text>
                <TimePickerSelect
                  selectStyle={{
                    height: 54,
                    borderRadius: 8,
                    borderColor: '#e6e6f0',
                    borderWidth: 1,
                    backgroundColor: '#fafafc',
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                  placeholderText='Selecione' 
                  placeholderTextColor='#c1bccc' 
                  onChangeDate={date => console.log(date)} />
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20, width: '25%' }} />
              <TouchableOpacity>
                <Text style={{ fontFamily: 'Archivo_600SemiBold', fontSize: 12, lineHeight: 20, textAlign: 'center', color: '#e33d3d' }}>
                  Excluir horário
                </Text>
              </TouchableOpacity>
              <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20, width: '25%' }} />
            </View>
    </>
  )
}

const ProfileForm: React.FC = () => {

  const { navigate } = useNavigation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required')
  });

  const initialValues: FormValues = {
    name: 'aaaaafs',
    surname: '',
    email: '',
    phone: '',
    cost: '',
    schedule: [1]
  }
  return (
    <Formik
    enableReinitialize
    initialValues={initialValues}
    onSubmit={
      (values, actions) => {
        console.log(values)
        //navigate('RegisterStepTwo', { name: values.name, surname: values.surname })
        actions.setSubmitting(false);
        //actions.resetForm();
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

export default ProfileForm;
