import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import onboardingImg from '../../../assets/images/onboarding2-background.png';
import stepTwo from '../../../assets/images/onboarding-step.png';
import nextStep from '../../../assets/images/onboarding-next_step.png';

function StepTwo() {

  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.onboardingImgContainer}>
        <Image source={onboardingImg} />
      </View>

      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={styles.introContainer}>
          <Text style={styles.introSection}>
            02.
          </Text>
          <Text style={styles.introDescription}>
            Ou dê aulas sobre o que você mais conhece
          </Text>
        </View>

        <View style={styles.stepOneContainer}>
          <Image style={styles.stepIcon} source={stepTwo} />

          <BorderlessButton onPress={() => navigate('Login')}>
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
    backgroundColor: '#04d361',
    alignItems: 'center',
  },
  introContainer: {
    flexDirection: 'column',
    marginLeft: 30,
    //marginTop: 40
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
    flexDirection: 'row',
  },

  stepIcon: {
    transform: [{
      rotate: '180deg'
    }]
  }
});

export default StepTwo;