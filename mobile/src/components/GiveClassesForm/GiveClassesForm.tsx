import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../Button';

import importantAdvise from '../../assets/images/important.png';
import TextField from '../TextField';
import TextFieldMasked from '../TextFieldMasked';
import Select from '../Select';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TimePickerSelect from '../TimePickerSelect';
import filterExpandIcon from '../../assets/images/icons/filter-expand-icon.png';

interface GiveClassesFormProps {

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
                <Text style={{ fontFamily: 'Archivo_600SemiBold', fontSize: 12, lineHeight: 20, textAlign: 'center', color: '#e33d3d' }}>Excluir horário</Text>
              </TouchableOpacity>
              <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20, width: '25%' }} />
            </View>
    </>
  )
}
const GiveClassesForm: React.FC<GiveClassesFormProps> = () => {
  const [phone, setPhone] = useState('');
  const [cost, setCost] = useState('');
  const [schedule, setSchedule] = useState([1]);
  return (
    <ScrollView style={{ marginTop: -40 }} contentContainerStyle={{ paddingVertical: 16 }}>
      <KeyboardAvoidingView behavior='padding' style={{ backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#e6e6f0', borderWidth: 1, marginHorizontal: 20, justifyContent: 'space-between', flexGrow: 1 }}>
        <View style={{ margin: 25 }}>
          <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
            Seus dados
          </Text>
          <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
            <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/19741953?s=460&u=b55781c981002566c88dfa21a984fadccc4d274c&v=4' }} style={{ width: 64, height: 64, borderRadius: 50 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ marginBottom: 7, fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 25, color: '#32264d' }}>Victor Soares</Text>
              <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 20, color: '#6a6180' }}>Física</Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 25, justifyContent: 'center', alignItems: 'flex-start', flex: 1 }}>
          <View style={{ width: '100%' }}>
            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Whatsapp</Text>
            <TextFieldMasked 
            type='cel-phone' 
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }} 
            placeholder='Ex: (85) 99132-5433'
            onChangeText={text => setPhone(text)} 
            value={phone} 
            textFieldStyle={{ height: 56 }} />
          </View>

          <View style={{ width: '100%', paddingVertical: 20 }}>
            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Bio</Text>
            <TextField multiline numberOfLines={20} textFieldStyle={{ height: 100 }} placeholder='Fale sobre você...' />
          </View>

          <View style={{ width: '100%', paddingVertical: 20 }}>
            <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
              Sobre a aula
            </Text>
            <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20 }} />

            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Matéria</Text>
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
            
            <Text style={{ marginBottom: 10, fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#9c98a6' }}>Custo da sua hora por aula</Text>
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
            onChangeText={text => setCost(text)} 
            value={cost} 
            textFieldStyle={{ height: 56 }} />
          </View>

          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ textAlign: 'left', fontFamily: 'Archivo_600SemiBold', fontSize: 20, lineHeight: 30, color: '#32264d' }}>
                Horários disponíveis
              </Text>
              <TouchableOpacity onPress={() => setSchedule([...schedule, 1])}>
                <Text style={{ color: '#8257e5' }}>+ Novo</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderColor: '#e6e6f0', borderWidth: 1, marginTop: 10, marginBottom: 20 }} />

            {schedule.map((item, index) => <ScheduleItem key={index} />)}
          </View>
        </View>

        <View style={{ backgroundColor: '#fafafc', height: 150, borderRadius: 8 }}>
          <View style={{ borderColor: '#e6e6f0', borderWidth: 1 }} />
          <View style={{ justifyContent: 'space-evenly', alignItems: 'flex-start', height: '100%', marginHorizontal: 25 }}>
            <Button color='secondary'>
              <Text style={{ fontFamily: 'Archivo_600SemiBold', fontSize: 16, lineHeight: 26, color: '#ffffff' }}>
                Salvar cadastro
              </Text>
            </Button>
            <Image source={importantAdvise} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default GiveClassesForm;