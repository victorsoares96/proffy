import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import arrowLeft from '../../assets/images/icons/arrow-strained.png';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
  schedule: Schedule[];
}

interface Schedule {
  id: number;
  week_day: number;
  from: string;
  from_minutes: number;
  to: string;
  to_minutes: number;
  class_id: number;
  owner_id: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  schedule: Schedule[];
  favorited: boolean;
}

interface ScheduleItemProps {
  week_day: number;
  from: string;
  to: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited, schedule }) => {
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
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
      // remover favoritos
    } else {
      // adicionar favoritos    
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  function ScheduleItem({ week_day, from, to }: ScheduleItemProps) {
    
    const WeekDayName: any = {
      1: 'Segunda',
      2: 'Terça',
      3: 'Quarta',
      4: 'Quinta',
      5: 'Sexta',
      6: 'Sábado',
      7: 'Domingo'
    }

    const textStyle = { 
      fontFamily: 'Archivo_700Bold', 
      fontSize: 16, 
      lineHeight: 21, 
      color: '#6a6180' 
    };

    const buttonStyle = { 
      backgroundColor: '#fafafc', 
      borderColor: '#e6e6f0', 
      paddingVertical: 10, 
      paddingHorizontal: 20, 
      borderWidth: 1, 
      borderRadius: 8,

      marginHorizontal: 24,
      marginVertical: 10
    };
    
    return (
      <TouchableOpacity style={buttonStyle}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={textStyle}>
            {WeekDayName[week_day]}
          </Text>
          <Image source={arrowLeft} />
          <Text style={textStyle}>
            {`${from}h - ${to}h`}
          </Text>
        </View>
      </TouchableOpacity>
    )
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

      <View style={styles.schedulesContainer}>
        <View style={styles.schedulesList}>
          <Text style={styles.schedulesHeader}>
            Dia
          </Text>
          <Text style={styles.schedulesHeader}>
            Horário
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          {schedule.map((item: Schedule) => 
            <ScheduleItem key={item.id} week_day={item.week_day} from={item.from} to={item.to} />
          )}
        </View>
      </View>

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
