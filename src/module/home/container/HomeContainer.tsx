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

const HomeContainer = () => {
  const [dataBanner, setDataBanner] = useState<contentTypes[]>([]);
  const [loadingBanner, setLoadingBanner] = useState<boolean>(true);
  const [dataAnnouncement, setDataAnnouncement] =
    useState<announcementProps>(announcementDefault);
  const [loadingAnnouncement, setLoadingAnnouncement] = useState<boolean>(true);
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

  const fetchProgramRandomize = async () => {
    setLoadingRandomProgram(true);
    let response = await getRandomProgram({category: categoryCode});
    if (response.success) {
      // console.log(response.data.content);
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
      console.log(response.data.content);
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
  useEffect(() => {
    fetchHighlight();
    fetchApiBanner();
    fetchAnnouncement();
  }, []);

  useEffect(() => {
    fetchProgramRandomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryCode]);

  return (
    <HomePresenter
      dataAnnouncement={dataAnnouncement}
      dataBanner={dataBanner}
      dataHighlight={dataHighlight}
      dataCategory={dataListCategory}
      loadingHighlight={loadingHighlight}
      loadingAnnouncement={loadingAnnouncement}
      loadingBanner={loadingBanner}
      handleCategorySelection={(value: string) =>
        handleCategorySelection(value)
      }
      dataProgram={dataRandomProgram}
      loadingProgram={loadingRandomProgram}
    />
  );
};

export default HomeContainer;
