import {Platform, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;
  saveArea?: boolean;
  style?: ViewStyle;
}

const LayoutScreen = ({children, style, saveArea = true}: LayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={[
          style,
          saveArea && Platform.OS === 'ios' && {paddingTop: insets.top},
        ]}>
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default LayoutScreen;
