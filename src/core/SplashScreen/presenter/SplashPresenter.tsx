import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {whiteColor} from '@Shared/constants/colors';

const SplashPresenter = () => {
  return (
    <View style={styles.container}>
      <Lottie
        autoPlay
        loop
        source={require('@Shared/assets/Lottie/lottie-rsk-splashscreen.json')}
      />
    </View>
  );
};

export default SplashPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
