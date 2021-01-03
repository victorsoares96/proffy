import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import emoteHeartBroken from '../../assets/images/icons/emote-heart-broken.png';
import emotePassionateIcon from '../../assets/images/icons/emote-passionate.png';

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
    setFavorites([]);
    AsyncStorage.setItem('favorites', JSON.stringify([]));
  }
  
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
      return () => setFavorites([]);
    }, [])
  );
  
  const emotePassionate = (
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Image source={emotePassionateIcon} />
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
          {favorites.length} proffys
      </Text>
    </View>
  )

  const removeFavorites = (
    <TouchableOpacity style={{ 
      backgroundColor: '#9871f5', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 8 }}
      onPress={cleanFavorites}>
      <Image source={emoteHeartBroken} />
      <Text style={{ 
        color: '#d4c2ff', 
        fontFamily: 'Archivo_400Regular', 
        fontStyle: 'normal', 
        fontWeight: 'normal', 
        fontSize: 16, 
        lineHeight: 19,
        marginLeft: 20
      }}>
        Remover todos
      </Text>
    </TouchableOpacity>
  )
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PageHeader title='Meus proffys favoritos' headerRight={emotePassionate} titleStyle={styles.headerTitle}>
        {removeFavorites}
      </PageHeader>
      <View style={styles.teacherList}>
        {
          favorites.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} schedule={teacher.schedule} teacher={teacher} favorited />
          })
        }
      </View>
    </ScrollView>
  );
}

export default Favorites;