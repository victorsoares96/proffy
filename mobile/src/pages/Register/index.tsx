import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import RegisterStepOne from './components/RegisterStepOne';
import RegisterStepTwo from './components/RegisterStepTwo';
import RegisterFinish from './components/RegisterFinish';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import arrowBack from '../../assets/images/icons/back-secondary.png';
import stepOne from '../../assets/images/onboarding-step.png';

const { Navigator, Screen } = createStackNavigator();
function Register() {
  
  const CustomHeader: StackNavigationOptions = {
    headerLeft: () =>  {
      const { goBack } = useNavigation();
      return (
        <TouchableOpacity onPress={goBack}>
          <Image style={{ marginHorizontal: -10 }} source={arrowBack} />
        </TouchableOpacity>
      )
    }, 
    headerLeftContainerStyle: {
      marginLeft: 30
    },
    headerTransparent: true,
    headerTitle: '',
    headerRightContainerStyle: {
      marginRight: 30
    }
  }
  return (
    <Navigator initialRouteName='RegisterStepOne'>
      <Screen name='RegisterStepOne' component={RegisterStepOne} options={{
        ...CustomHeader,
        headerRight: () => <Image style={{ marginHorizontal: 0 }} source={stepOne} />
      }} />
      <Screen name='RegisterStepTwo' component={RegisterStepTwo} options={{
        ...CustomHeader,
        headerRight: () => <Image style={{ marginHorizontal: 0, transform: [{ rotate: '180deg' }] }} source={stepOne} />
      }} />
      <Screen name='RegisterFinish' component={RegisterFinish} options={{ headerShown: false }} />
    </Navigator>
  )
}

export default Register;