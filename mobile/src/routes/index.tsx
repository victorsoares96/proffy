import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../contexts/authContext';
import { ActivityIndicator, Text, View } from 'react-native';

const IndexRoutes: any = {
  'true': <AppStack />,
  'false': <AuthStack />
}

function Routes() {
  const { signed, loading, user } = useAuth();

  if(loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8257e5' }}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {IndexRoutes[signed.toString()]}
    </NavigationContainer>
  );
}

export default Routes;