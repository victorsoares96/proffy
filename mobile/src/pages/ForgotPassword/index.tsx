import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ForgotPasswordPage from './components/ForgotPassword';
import ForgotPasswordFinish from './components/ForgotPasswordFinish';

const { Navigator, Screen } = createStackNavigator();
function ForgotPassword() {
  return (
    <Navigator initialRouteName='ForgotPassword' screenOptions={{ headerShown: false }}>
      <Screen name='ForgotPassword' component={ForgotPasswordPage} />
      <Screen name='ForgotPasswordFinish' component={ForgotPasswordFinish} />
    </Navigator>
  )
}

export default ForgotPassword;