import React from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import {contentTypes} from '../types/bannerTypes';
import SectionBanner from '../components/organisms/SectionBanner';
import {announcementProps} from '../types/announcement';
import {highlightProps} from '../types/highlights';
import HiglightList from '../components/molecules/HiglightList';
import {ScrollView} from 'react-native-gesture-handler';

export interface homePresenterProps {
  dataAnnouncement: announcementProps;
  dataBanner: contentTypes[];
  dataHighlight: highlightProps[];
  loadingHighlight: boolean;
  loadingBanner: boolean;
  loadingAnnouncement: boolean;
}

const HomePresenter = ({
  dataAnnouncement,
  dataBanner,
  dataHighlight,
  loadingBanner,
  loadingAnnouncement,
  loadingHighlight,
}: homePresenterProps) => {
  return (
    <LayoutScreen style={{flex: 1}}>
      <PanelInformation
        textInformation={dataAnnouncement.description}
        titleButton={dataAnnouncement.callToAction}
        uri={dataAnnouncement.url}
        loading={loadingAnnouncement}
      />
      <ScrollView>
        <SectionBanner loading={loadingBanner} dataBanner={dataBanner} />
        <HiglightList data={dataHighlight} loading={loadingHighlight} />
      </ScrollView>
    </LayoutScreen>
  );
};

export default HomePresenter;
