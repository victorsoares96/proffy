import React, { ReactNode } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {headerRight}
    </View>
    {children}
  </View>
)

export default PageHeader;