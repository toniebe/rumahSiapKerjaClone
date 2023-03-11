import React from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import {contentTypes} from '../types/bannerTypes';
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

      <SectionBanner loading={loadingBanner} dataBanner={dataBanner} />
    </LayoutScreen>
  );
};

export default HomePresenter;
