import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../contexts/authContext';
import { ActivityIndicator, View } from 'react-native';

function Routes() {
  const { signed, loadingApp } = useAuth();

  if(loadingApp) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8257e5' }}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {signed ? <AppStack /> : <AuthStack />}   
    </NavigationContainer>
  );
}

export default Routes;