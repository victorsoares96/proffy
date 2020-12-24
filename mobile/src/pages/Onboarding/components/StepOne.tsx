import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import onboardingImg from '../../../assets/images/onboarding1-background.png';
import stepOne from '../../../assets/images/onboarding-step.png';
import nextStep from '../../../assets/images/onboarding-next_step.png';

function StepOne() {

  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.onboardingImgContainer}>
        <Image source={onboardingImg} />
      </View>

      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={styles.introContainer}>
          <Text style={styles.introSection}>
            01.
          </Text>
          <Text style={styles.introDescription}>
            Encontre vários professores para ensinar você
          </Text>
        </View>

        <View style={styles.stepOneContainer}>
          <Image source={stepOne} />

          <BorderlessButton onPress={() => navigate('StepTwo')}>
            <Image source={nextStep} />
          </BorderlessButton>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'flex-start',
  },
  onboardingImgContainer: {
    paddingVertical: 50,
    height: '45%',
    justifyContent: 'center',
    backgroundColor: '#8257e5',
    alignItems: 'center',
  },
  introContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  introSection: {
    color: '#6a6180',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 44,
    opacity: 0.16
  },
  introDescription: {
    color: '#6a6180',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 34,
    marginTop: 20
  },
  stepOneContainer: {
    marginHorizontal: 30,

    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default StepOne;