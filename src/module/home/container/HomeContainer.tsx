import React, {useEffect, useState} from 'react';
import HomePresenter from '../presenter/HomePresenter';
import {contentTypes} from '../types/bannerTypes';
import {getBanner} from '../api/getBanner';
import Toast from 'react-native-toast-message';
import {announcementDefault, announcementProps} from '../types/announcement';
import {getAnnouncement} from '../api/getAnnouncement';
import {getHighlight} from '../api/getHighlights';
import {highlightProps} from '../types/highlights';

const HomeContainer = () => {
  const [dataBanner, setDataBanner] = useState<contentTypes[]>([]);
  const [loadingBanner, setLoadingBanner] = useState<boolean>(true);
  const [dataAnnouncement, setDataAnnouncement] =
    useState<announcementProps>(announcementDefault);
  const [loadingAnnouncement, setLoadingAnnouncement] = useState<boolean>(true);
  const [dataHighlight, setDataHiglight] = useState<highlightProps[]>([]);
  const [loadingHighlight, setLoadingHighlight] = useState<boolean>(true);
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
      setDataAnnouncement(response.data);
      setLoadingAnnouncement(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };

  const fetchHighlight = async () => {
    let response = await getHighlight();
    if (response.success) {
      setDataHiglight(response.data.content);
      console.log(response.data.content);
      setLoadingHighlight(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };
  useEffect(() => {
    fetchHighlight();
    fetchApiBanner();
    fetchAnnouncement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePresenter
      dataAnnouncement={dataAnnouncement}
      dataBanner={dataBanner}
      dataHighlight={dataHighlight}
      loadingHighlight={loadingHighlight}
      loadingAnnouncement={loadingAnnouncement}
      loadingBanner={loadingBanner}
    />
  );
};

export default HomeContainer;
