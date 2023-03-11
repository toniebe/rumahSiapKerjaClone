import React, {useEffect, useState} from 'react';
import HomePresenter from '../presenter/HomePresenter';
import {contentTypes} from '../types/bannerTypes';
import {getBanner} from '../api/getBanner';
import Toast from 'react-native-toast-message';
import {announcementDefault, announcementProps} from '../types/announcement';
import {getAnnouncement} from '../api/getAnnouncement';

const HomeContainer = () => {
  const [dataBanner, setDataBanner] = useState<contentTypes[]>([]);
  const [loadingBanner, setLoadingBanner] = useState<boolean>(true);
  const [dataAnnouncement, setDataAnnouncement] =
    useState<announcementProps>(announcementDefault);
  const [loadingAnnouncement, setLoadingAnnouncement] = useState<boolean>(true);
  const fetchApiBanner = async () => {
    setLoadingBanner(true);
    let response = await getBanner();
    if (response.success) {
      setDataBanner(response.data.content);
      setLoadingBanner(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };

  const fetchAnnouncement = async () => {
    setLoadingAnnouncement(true);
    let response = await getAnnouncement();
    if (response.success) {
      console.log(response.data);

      setDataAnnouncement(response.data);
      setLoadingAnnouncement(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };
  useEffect(() => {
    fetchApiBanner();
    fetchAnnouncement();
  }, []);

  return (
    <HomePresenter
      dataAnnouncement={dataAnnouncement}
      loadingAnnouncement={loadingAnnouncement}
      loadingBanner={loadingBanner}
      dataBanner={dataBanner}
    />
  );
};

export default HomeContainer;
