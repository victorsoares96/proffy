import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterStepOne from './components/RegisterStepOne';
import RegisterStepTwo from './components/RegisterStepTwo';
import RegisterFinish from './components/RegisterFinish';

const { Navigator, Screen } = createStackNavigator();
function Register() {
  return (
    <Navigator initialRouteName='RegisterStepOne' screenOptions={{ headerShown: false }}>
      <Screen name='RegisterStepOne' component={RegisterStepOne} />
      <Screen name='RegisterStepTwo' component={RegisterStepTwo} />
      <Screen name='RegisterFinish' component={RegisterFinish} />
    </Navigator>
  )
}

export default Register;