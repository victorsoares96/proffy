import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBGImage from '../../assets/images/give-classes-background.png';
import PageHeader from '../../components/PageHeader';
import GiveClassesForm from '../../components/GiveClassesForm/GiveClassesForm';

function GiveClasses() {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PageHeader title='Que incrível que você quer dar aulas.' titleStyle={styles.headerTitle}>
        <Text style={styles.headerSubtitle}>
          O primeiro passo é preencher esse formulário de inscrição.
        </Text>
      </PageHeader>

      <GiveClassesForm />
    </ScrollView>
  );
}

export default GiveClasses;