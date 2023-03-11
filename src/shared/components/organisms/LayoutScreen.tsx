import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;
  style?: ViewStyle;
}

const LayoutScreen = ({children, style}: LayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={[style, {paddingTop: Platform.OS === 'ios' ? insets.top : 0}]}>
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default LayoutScreen;

const styles = StyleSheet.create({});
