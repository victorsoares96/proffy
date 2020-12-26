import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { ScrollView, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import proffysFilter from '../../assets/images/proffys-filter.png';
import filterExpandIcon from '../../assets/images/icons/filter-expand-icon.png';
import emoteHappyIcon from '../../assets/images/icons/emote-smile.png';
import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

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
    console.log(response);
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

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
          32 proffys
      </Text>
    </View>
  )
  const [state, setState] = useState('java');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PageHeader title='Proffys disponíveis' headerRight={emoteHappy}>
        {filterButton}
        {
          isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <Picker
                selectedValue={state}
                mode='dialog'
                style={{width: '100%', backgroundColor: '#fff'}}
                onValueChange={(itemValue: any, itemIndex) =>
                  setState(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              {/*<TextInput 
                style={styles.input} 
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholder='Qual a matéria?' 
                placeholderTextColor='#c1bccc'
              />*/}
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput 
                    style={styles.input}
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                    placeholder='Qual o dia?' 
                    placeholderTextColor='#c1bccc'
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput 
                    style={styles.input} 
                    value={time}
                    onChangeText={text => setTime(text)}
                    placeholder='Qual o horário?' 
                    placeholderTextColor='#c1bccc'
                  />
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
            return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
          })
        }
      </ScrollView>
    </ScrollView>
  );
}

export default TeacherList;