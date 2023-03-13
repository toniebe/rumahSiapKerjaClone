import React, {Fragment} from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import {contentTypes} from '../types/bannerTypes';
import SectionBanner from '../components/organisms/SectionBanner';
import {highlightProps} from '../types/highlights';
import {dataCategoryProps, programProps} from '../types/randomProgram';
import SectionHighlight from '../components/organisms/SectionHighlight';
import {FlatList} from 'react-native';
import SectionRandomProgram from '../components/organisms/SectionRandomProgram';
import {sectionHeader} from '../types/programStructure';
import ListHeader from '../components/organisms/ListHeader';

export interface homePresenterProps {
  dataBanner: contentTypes[];
  dataHighlight: highlightProps[];
  dataCategory: dataCategoryProps[];
  dataProgram: programProps[];
  dataHeader: sectionHeader[];
  loadingHighlight: boolean;
  loadingBanner: boolean;
  loadingProgram: boolean;
  handleCategorySelection?: any;
  actionSeeAll?: any;
  actionCard?: any;
  onPressItem: any;
}

const HomePresenter = ({
  dataBanner,
  dataHighlight,
  dataCategory,
  dataProgram,
  dataHeader,
  loadingBanner,
  loadingHighlight,
  loadingProgram,
  handleCategorySelection,
  actionSeeAll,
  actionCard,
  onPressItem,
}: homePresenterProps) => {
  return (
    <LayoutScreen saveArea={false}>
      <FlatList
        ListHeaderComponent={() => (
          <Fragment>
            <SectionBanner loading={loadingBanner} dataBanner={dataBanner} />
            {dataHighlight.length > 0 && (
              <SectionHighlight
                data={dataHighlight}
                loading={loadingHighlight}
              />
            )}
          </Fragment>
        )}
        data={['1']}
        renderItem={() => (
          <SectionRandomProgram
            actionCard={actionCard}
            loading={loadingProgram}
            dataCategory={dataCategory}
            dataProgram={dataProgram}
            handleCategory={handleCategorySelection}
          />
        )}
        ListFooterComponent={() => (
          <ListHeader
            data={dataHeader}
            actionSeeAll={actionSeeAll}
            onPressItem={onPressItem}
          />
        )}
      />
    </LayoutScreen>
  );
};

export default HomePresenter;
