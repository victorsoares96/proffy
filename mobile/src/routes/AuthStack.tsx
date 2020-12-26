import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Onboarding' component={Onboarding}/>

      <Screen name='Login' component={Login}/>
      <Screen name='Register' component={Register}/>
      <Screen name='ForgotPassword' component={ForgotPassword}/>
    </Navigator>
  );
}

export default AuthStack;