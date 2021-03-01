import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Text, View } from 'react-native';

import RegisterStepTwoForm from '../../../components/Forms/RegisterStepTwoForm';

function RegisterStepTwo() {
  return(
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>
          Crie sua conta gratuíta
        </Text>
        <Text style={styles.logoDescription}>
          Basta preencher estes dados e você estará conosco.
        </Text>
      </View>

      <RegisterStepTwoForm />
    </ScrollView>
  )
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    backgroundColor: '#f0f0f7',
  },
  headerContainer: {
    margin: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 30,
    justifyContent: 'center',
    flex: 1,
  },
  logoTitle: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 42,

    marginBottom: 20
  },
  logoDescription: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24
  }
});

export default RegisterStepTwo;