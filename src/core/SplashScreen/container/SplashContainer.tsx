import React, {useEffect} from 'react';
import SplashPresenter from '../presenter/SplashPresenter';
import {navigationProps} from '@Shared/Types/navigationProps';

interface SplashProps {}

const SplashContainer = ({navigation}: SplashProps & navigationProps) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Dashboard'), 3000);
  }, [navigation]);
  return <SplashPresenter />;
};

export default SplashContainer;
