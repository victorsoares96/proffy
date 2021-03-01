import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import Button from '../../../components/Button';

import registerFinish from '../../../assets/images/register-finish.png';

function RegisterFinish() {
  
  const { navigate } = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#8257e5' }}>
      <Image source={registerFinish} />

      <View style={{ width: '100%', paddingHorizontal: 30, alignItems: 'center' }}>
        <Button color='secondary' rippleColor='#ffffff' marginTop={20} onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Fazer login</Text>
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

export default RegisterFinish;