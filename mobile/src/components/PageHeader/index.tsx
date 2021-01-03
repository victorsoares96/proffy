import React, { ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children, containerStyle, titleStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.header}>
      <Text style={titleStyle}>{title}</Text>
      {headerRight}
    </View>
    {children}
  </View>
)

export default PageHeader;