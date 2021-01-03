import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';

import filterExpandIcon from '../../assets/images/icons/filter-expand-icon.png';
import emoteHappyIcon from '../../assets/images/icons/emote-smile.png';
import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';
import TimePickerSelect from '../../utils/components/TimePickerSelect';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }
  
  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    console.log(response.data.Teachers);
    setIsFiltersVisible(false);
    setTeachers(response.data.Teachers);
  }

  useFocusEffect(
    useCallback(() => {
      console.log('oi')
      loadFavorites();
      return () => setFavorites([]);
    }, [])
  );

  const filterButton = (
    <View style={{ borderBottomColor: '#9871f5', borderBottomWidth: 1, opacity: 0.5 }}>
      <TouchableOpacity onPress={handleToggleFiltersVisible}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Feather name='filter' size={24} color='#04d361' style={{ marginRight: 15 }} />
            <Text style={{ 
              color: '#d4c2ff', 
              fontFamily: 'Archivo_400Regular', 
              fontStyle: 'normal', 
              fontWeight: 'normal', 
              fontSize: 16, 
              lineHeight: 19 
              }}>
                Filtrar por dia, hora e matéria
            </Text>
          </View>
          
          <Image style={{ marginLeft: 'auto', transform: [{ rotate: isFiltersVisible ? '0deg' : '180deg' }] }} source={filterExpandIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )

  const emoteHappy = (
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Image source={emoteHappyIcon} />
      <Text style={{ 
        color: '#d4c2ff', 
        fontFamily: 'Poppins_400Regular', 
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,

        marginLeft: 10,
        textAlign: 'right'
        }}>
          {teachers.length} proffys
      </Text>
    </View>
  )

  const handleHourMinute = (date: Date) => {
    const hourMinute = `${date?.getHours()}:${date?.getMinutes()}`
    setTime(hourMinute);
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{JSON.stringify(favorites)}</Text>
      <PageHeader title='Proffys disponíveis' headerRight={emoteHappy} titleStyle={styles.headerTitle}>
        {filterButton}
        {
          isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Selecione', value: 'Selecione' }}
                style={pickerSelectStyles}
                onValueChange={(value) => setSubject(value)}
                items={[
                  { label: 'Matemática', value: 'Matemática', inputLabel: 'Matemática' },
                  { label: 'Física', value: 'fisica', inputLabel: 'Física' },
                  { label: 'Quimíca', value: 'quimica', inputLabel: 'Quimíca' },
                ]}
                Icon={() => <Image style={{ marginLeft: 'auto', transform: [{ rotate: '180deg' }] }} source={filterExpandIcon} />}
              />
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    doneText='Salvar'
                    placeholder={{ label: 'Selecione', value: 'Selecione' }}
                    style={pickerSelectStyles}
                    onValueChange={(value) => setWeekDay(value)}
                    items={[
                      { label: 'Segunda', value: 1, inputLabel: 'Segunda' },
                      { label: 'Terça', value: 2, inputLabel: 'Terça' },
                      { label: 'Quarta', value: 3, inputLabel: 'Quarta' },
                      { label: 'Quinta', value: 4, inputLabel: 'Quinta' },
                      { label: 'Sexta', value: 5, inputLabel: 'Sexta' },
                      { label: 'Sábado', value: 6, inputLabel: 'Sábado' },
                      { label: 'Domingo', value: 7, inputLabel: 'Domingo' },
                    ]}
                    Icon={() => <Image style={{ marginLeft: 'auto', transform: [{ rotate: '180deg' }] }} source={filterExpandIcon} />}
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TimePickerSelect
                  selectStyle={{
                    height: 54,
                    borderRadius: 8,
                    borderColor: '#e6e6f0',
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                  placeholderText='Selecione' 
                  placeholderTextColor='#c1bccc' 
                  onChangeDate={handleHourMinute}
                  IconRight={<Image style={{ marginLeft: 'auto', transform: [{ rotate: '180deg' }] }} source={filterExpandIcon} />}/>
                </View>
              </View>
              <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                <Text style={styles.submitButtonText}>
                  Filtrar
                </Text>
              </RectButton>
            </View>
          )
        }
      </PageHeader>
      <ScrollView style={styles.teacherList} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16
      }}>
        {
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} schedule={teacher.schedule} favorited={favorites.includes(teacher.id)} />
          })
        }
      </ScrollView>
    </ScrollView>
  );
}

const pickerSelectStyles: PickerStyle = StyleSheet.create({
  inputIOS: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',

    borderRadius: 8,
    color: '#c1bccc',
    backgroundColor: '#fff',
    height: 54,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputAndroid: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',

    borderRadius: 8,
    color: '#c1bccc',
    backgroundColor: '#fff',
    height: 54,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  iconContainer: {
    marginTop: 18,
    marginRight: 18
  }
});

export default TeacherList;