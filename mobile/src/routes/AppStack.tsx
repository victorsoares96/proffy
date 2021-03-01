import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

import backIcon from '../assets/images/icons/back.png';
import logoImg from '../assets/images/logo.png';

import logout from '../assets/images/icons/logout.png';
import avatarIcon from '../assets/images/icons/avatar.png';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/authContext';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createStackNavigator();

const LandingOptions: StackNavigationOptions = { 
  headerLeft: () => {
    const { user } = useAuth();
    const { navigate } = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={user?.avatar ? { uri: user?.avatar } : avatarIcon} />
          <Text style={{ marginLeft: 15, fontFamily: 'Poppins_400Regular', color: '#d4c2ff', fontStyle: 'normal', fontWeight: '500', fontSize: 12, lineHeight: 22 }}>
            {user?.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }, headerLeftContainerStyle: {
    marginLeft: 30
  },
  headerStyle: {
    backgroundColor: '#8257e5',
  },
  headerTransparent: true,
  headerTitle: '',
  headerRight: () => {
    const { signOut } = useAuth();
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity 
        onPress={() => signOut()}
        activeOpacity={0.1} 
        style={{ backgroundColor: '#774dd6', width: 40, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={logout} />
        </TouchableOpacity>
      </View>
    )
  },
  headerRightContainerStyle: {
    marginRight: 30
  }
}

const CustomHeader: StackNavigationOptions = {
  headerShown: true,
  headerTransparent: false,
  
  headerTitleStyle: {
    color: '#d4c2ff',
    fontFamily: 'Archivo_400Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 15
  },
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#774dd6',
    shadowRadius: 0,
    shadowColor: '#6842c2',
    shadowOffset: {
      height: 0,
    },
  },
  headerLeft: () => {
    const { goBack } = useNavigation();
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={goBack}>
          <Image source={backIcon} />
        </TouchableOpacity>
      </View>
    )
  },
  headerRight: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={logoImg} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

function AppStack() {
  return (
    <Navigator>
      <Screen name='Landing' component={Landing} options={LandingOptions}/>
      <Screen name='Profile' component={Profile} options={{
        headerTitle: 'Perfil',
        ...CustomHeader
      }}/>
      <Screen name='GiveClasses' component={GiveClasses} options={{
        headerTitle: 'Dar aulas',
        ...CustomHeader
      }}/>
      <Screen name='Study' component={StudyTabs} options={{
        headerTitle: 'Estudar',
        ...CustomHeader
      }} />
    </Navigator>
  );
}

export default AppStack;