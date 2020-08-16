import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const {
    avatar,
    name,
    subject,
    bio,
    cost,
    whatsapp
  } = teacher;
  const [isFavorited, setIsFavorited] = useState(favorited);
  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    });
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }
  async function cleanFavorites() {
    await AsyncStorage.removeItem('favorites');
  }
  async function handleToggleFavorited() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if(favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if(isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      console.log('favoriteIndex:', favoriteIndex);
      console.log('antes:', favoritesArray);
      favoritesArray.splice(favoriteIndex, 1);
      console.log('depois:', favoritesArray);
      setIsFavorited(false);
      // remover favoritos
    } else {
      // adicionar favoritos
      
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: avatar}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorited}
          >
            { 
              isFavorited 
              ? <Image source={unFavoriteIcon} /> 
              : <Image source={heartOutlineIcon} /> 
            }
          </RectButton>

          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;
