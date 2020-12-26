import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, Image, View } from "react-native";
import Button from '../../../utils/components/Button';

import forgotPasswordFinish from '../../../assets/images/forgot-password-finish.png';
import { useNavigation } from '@react-navigation/native';

function ForgotPasswordStepFinish() {
  const { navigate } = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#8257e5' }}>
      <Image source={forgotPasswordFinish} />

      <View style={{ width: '100%', paddingHorizontal: 30, alignItems: 'center' }}>
        <Button color='secondary' rippleColor='#ffffff' marginTop={20} onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Voltar ao login</Text>
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,

    textAlign: 'center'
  },
});

export default ForgotPasswordStepFinish;