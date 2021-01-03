import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/authContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_600SemiBold, Archivo_700Bold,
    Poppins_400Regular, Poppins_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthProvider>
        <Routes />
        <StatusBar style='auto' />
      </AuthProvider>
    );
  }
}
