import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import Button from '@Shared/components/atom/Button/Button';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import Loading from '@Shared/components/atom/Loading';
import Banner from '../components/molecules/Banner';
import {contentTypes} from '../types/bannerTypes';
import {blackColor, whiteColor} from '@Shared/constants/colors';
import Section from '@Shared/components/organisms/Section';
import {scale} from '@Shared/helper/scaling';
import SectionBanner from '../components/organisms/SectionBanner';
import {announcementProps} from '../types/announcement';

export interface homePresenterProps {
  dataAnnouncement: announcementProps;
  dataBanner: contentTypes[];
  loadingBanner: boolean;
  loadingAnnouncement: boolean;
}

const HomePresenter = ({
  dataAnnouncement,
  dataBanner,
  loadingBanner,
  loadingAnnouncement,
}: homePresenterProps) => {
  return (
    <LayoutScreen style={{flex: 1}}>
      <PanelInformation
        textInformation={dataAnnouncement.description}
        titleButton={dataAnnouncement.callToAction}
        uri={dataAnnouncement.url}
        loading={loadingAnnouncement}
      />

      <SectionBanner loading={true} dataBanner={dataBanner} />
    </LayoutScreen>
  );
};

export default HomePresenter;

const styles = StyleSheet.create({});
