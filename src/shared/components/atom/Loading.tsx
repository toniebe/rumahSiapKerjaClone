import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import LottieLoading from '@Shared/assets/Lottie/lottie-rsk-loading.json';
import {blueAlternative3} from '@Shared/constants/colors';

interface loadingProps {
  full?: boolean;
  transparent?: boolean;
}

const Loading = ({full = false, transparent = false}: loadingProps) => {
  return full ? (
    <View
      style={[
        full
          ? styles.container
          : transparent && [
              styles.container,
              {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.4)',
              },
            ],
      ]}>
      <Lottie
        source={require('@Shared/assets/Lottie/lottie-rsk-loading.json')}
        autoPlay
        loop
      />
    </View>
  ) : (
    <ActivityIndicator size={'small'} color={blueAlternative3} />
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
