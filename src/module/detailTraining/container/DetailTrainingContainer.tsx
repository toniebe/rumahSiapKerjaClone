import {navigationProps} from '@Shared/Types/navigationProps';
import React, {useEffect, useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {getDetailTrainingById} from '../api/getDetailTrainingById';
import NavigationHeaderDetail from '../components/atoms/NavigationHeaderDetail';
import DetailTrainingPresenter from '../presenter/DetailTrainingPresenter';
import {dataDetailTrainingProps} from '../types/detailTrainingTypes';

const DetailTrainingContainer = ({navigation, route}: navigationProps) => {
  const {itemId}: any = route?.params;
  const [dataDetail, setDataDetail] = useState<dataDetailTrainingProps>();
  const [loadingDetail, setLoadingDetail] = useState<boolean>(true);

  const fetchDataTrainingDetailByID = async () => {
    setLoadingDetail(true);
    let response = await getDetailTrainingById(itemId);
    if (response.success) {
      console.log(response.data);

      navigation.setOptions({
        headerShown: true,
        header: () => (
          <NavigationHeaderDetail
            actionBack={() => navigation.goBack()}
            textShare={response.data.title}
          />
        ),
      });
      setDataDetail(response.data);
      setLoadingDetail(false);
      console.log({dataDetail});
    } else {
      Toast.show({
        type: 'error',
        text1: 'ups terjadi kendala pada sistem',
      });
    }
  };

  useEffect(() => {
    fetchDataTrainingDetailByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailTrainingPresenter dataDetail={dataDetail} loading={loadingDetail} />
  );
};

export default DetailTrainingContainer;
