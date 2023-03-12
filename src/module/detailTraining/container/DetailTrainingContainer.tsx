import {navigationProps} from '@Shared/Types/navigationProps';
import React, {useEffect} from 'react';
import DetailTrainingPresenter from '../presenter/DetailTrainingPresenter';

const DetailTrainingContainer = ({navigation, route}: navigationProps) => {
  return <DetailTrainingPresenter />;
};

export default DetailTrainingContainer;
