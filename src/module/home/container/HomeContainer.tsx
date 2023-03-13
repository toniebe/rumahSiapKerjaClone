import React, {useEffect, useState} from 'react';
import HomePresenter from '../presenter/HomePresenter';
import {contentTypes} from '../types/bannerTypes';
import {getBanner} from '../api/getBanner';
import Toast from 'react-native-toast-message';
import {announcementDefault, announcementProps} from '../types/announcement';
import {getAnnouncement} from '../api/getAnnouncement';
import {getHighlight} from '../api/getHighlights';
import {highlightProps} from '../types/highlights';
import {categoryList} from '../data/categoryMock';
import {dataCategoryProps, programProps} from '../types/randomProgram';
import {getRandomProgram} from '../api/getRandomProgram';
import {sectionHeader} from '../types/programStructure';
import {getHeaderProgram} from '../api/getHeaderProgram';
import {navigationProps} from '@Shared/Types/navigationProps';
import NavigationHomeHeader from '../components/atom/NavigationHomeHeader';

const HomeContainer = ({navigation}: navigationProps) => {
  const [dataBanner, setDataBanner] = useState<contentTypes[]>([]);
  const [loadingBanner, setLoadingBanner] = useState<boolean>(true);
  const [dataAnnouncement, setDataAnnouncement] =
    useState<announcementProps>(announcementDefault);
  const [dataHighlight, setDataHiglight] = useState<highlightProps[]>([]);
  const [loadingHighlight, setLoadingHighlight] = useState<boolean>(true);
  const [dataListCategory, setDataListCategory] =
    useState<dataCategoryProps[]>(categoryList);

  const [categoryCode, setCategoryCode] = useState<string>('CAT-407');
  const [dataRandomProgram, setDataRandomProgram] = useState<programProps[]>(
    [],
  );
  const [loadingRandomProgram, setLoadingRandomProgram] =
    useState<boolean>(true);

  const [dataHeader, setDataHeader] = useState<sectionHeader[]>([]);

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
    let response = await getAnnouncement();
    if (response.success) {
      setDataAnnouncement(response.data);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };

  const fetchProgramRandomize = async () => {
    setLoadingRandomProgram(true);
    let response = await getRandomProgram({category: categoryCode});
    if (response.success) {
      setDataRandomProgram(response.data.content);
      setLoadingRandomProgram(false);
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
      setLoadingHighlight(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'ada kendala, pastikan koneksi kamu',
      });
    }
  };

  function handleCategorySelection(categoryCode: string) {
    setCategoryCode(categoryCode);
    const updatedCategoryList: dataCategoryProps[] = dataListCategory.map(
      category => {
        if (category.categoryCode === categoryCode) {
          return {
            ...category,
            isActive: true,
          };
        } else {
          return {
            ...category,
            isActive: false,
          };
        }
      },
    );

    setDataListCategory(updatedCategoryList);
  }

  const fetchDataHeader = async () => {
    let response = await getHeaderProgram();
    if (response.success) {
      setDataHeader(response.data);
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
    fetchDataHeader();
    fetchAnnouncement();
  }, []);

  useEffect(() => {
    fetchProgramRandomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryCode]);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <NavigationHomeHeader panelData={dataAnnouncement} loading={false} />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnnouncement]);

  return (
    <HomePresenter
      dataBanner={dataBanner}
      dataHighlight={dataHighlight}
      dataCategory={dataListCategory}
      loadingHighlight={loadingHighlight}
      loadingBanner={loadingBanner}
      handleCategorySelection={(value: string) =>
        handleCategorySelection(value)
      }
      dataProgram={dataRandomProgram}
      loadingProgram={loadingRandomProgram}
      dataHeader={dataHeader}
      actionSeeAll={(value: any) =>
        navigation.navigate('DetailTraining', {itemId: value})
      }
      actionCard={(value: any) =>
        navigation.navigate('DetailTraining', {itemId: value})
      }
      onPressItem={(value: any) => {
        navigation.navigate('DetailTraining', {itemId: value});
        console.log(value);
      }}
    />
  );
};

export default HomeContainer;
