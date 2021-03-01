import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import backgroundImage from '../../assets/images/background-2.png';
import avatar from '../../assets/images/icons/avatar.png';
import styles from './styles';
import { useAuth } from '../../contexts/authContext';

function Profile() {
  const { user } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <ImageBackground source={avatar} style={styles.avatar}>
            <TouchableOpacity style={styles.changeProfileImageButton}>
              <Feather name='camera' size={24} color='#fff' />
            </TouchableOpacity>
          </ImageBackground>
          
          <View style={styles.userDescriptionContainer}>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userSubject}>{user?.bio ? user.bio : 'Nenhuma'}</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

export default Profile;