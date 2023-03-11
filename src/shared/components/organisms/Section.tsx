import {whiteColor} from '@Shared/constants/colors';
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: ReactNode;
  style?: any;
}

export default function Section({children, style}: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    marginVertical: 10,
  },
});
