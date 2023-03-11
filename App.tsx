import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/shared/components/atom/Toast';
import Core from '@CoreApp/index';

const App = () => {
  return (
    <Fragment>
      <Core />
      <Toast config={toastConfig} />
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({});
