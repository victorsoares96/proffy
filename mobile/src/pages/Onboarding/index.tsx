import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

const { Navigator, Screen } = createStackNavigator();

function Onboarding() {
  return (
    <Navigator initialRouteName="StepOne" screenOptions={{ headerShown: false }}>
      <Screen name="StepOne" component={StepOne} />
      <Screen name="StepTwo" component={StepTwo} />
    </Navigator>
  )
}

export default Onboarding;