import React from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import {contentTypes} from '../types/bannerTypes';
import SectionBanner from '../components/organisms/SectionBanner';
import {announcementProps} from '../types/announcement';
import {highlightProps} from '../types/highlights';
import {dataCategoryProps, programProps} from '../types/randomProgram';
import SectionHighlight from '../components/organisms/SectionHighlight';
import {ScrollView} from 'react-native';
import SectionRandomProgram from '../components/organisms/SectionRandomProgram';

export interface homePresenterProps {
  dataAnnouncement: announcementProps;
  dataBanner: contentTypes[];
  dataHighlight: highlightProps[];
  dataCategory: dataCategoryProps[];
  dataProgram: programProps[];
  loadingHighlight: boolean;
  loadingBanner: boolean;
  loadingAnnouncement: boolean;
  loadingProgram: boolean;
  handleCategorySelection?: any;
}

const HomePresenter = ({
  dataAnnouncement,
  dataBanner,
  dataHighlight,
  dataCategory,
  dataProgram,
  loadingBanner,
  loadingAnnouncement,
  loadingHighlight,
  loadingProgram,
  handleCategorySelection,
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
        <SectionHighlight data={dataHighlight} loading={loadingHighlight} />
        <SectionRandomProgram
          loading={loadingProgram}
          dataCategory={dataCategory}
          dataProgram={dataProgram}
          handleCategory={handleCategorySelection}
        />
      </ScrollView>
    </LayoutScreen>
  );
};

export default HomePresenter;
