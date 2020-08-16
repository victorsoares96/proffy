import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        console.log(favoritedTeachers);
        setFavorites(favoritedTeachers);
      }
    });
  }
  function cleanFavorites() {
    //setFavorites([]);
  }
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
      return () => cleanFavorites();
    }, [])
  );
  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />

      <ScrollView style={styles.teacherList} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16
      }}>
        {
          favorites.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} favorited />
          })
        }
      </ScrollView>
    </View>
  );
}

export default Favorites;