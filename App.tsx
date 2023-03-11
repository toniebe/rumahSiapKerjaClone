import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/shared/components/atom/Toast';
import {BASE_URL} from '@env';
import IconRumah from './src/shared/assets/icon/IconRumah.svg';
import {SvgAst, SvgUri} from 'react-native-svg';
import Core from '@CoreApp/index';

const App = () => {
  useEffect(() => {
    Toast.show({
      type: 'error',
      text2: 'example an error',
    });
  }, []);
  return (
    <>
      <Toast config={toastConfig} />
      <Core />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
