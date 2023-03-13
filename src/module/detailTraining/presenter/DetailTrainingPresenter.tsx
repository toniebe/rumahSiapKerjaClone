import React from 'react';
import SectionHeaderDetail from '../components/organisms/SectionHeaderDetail';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import {dataDetailTrainingProps} from '../types/detailTrainingTypes';
import Loading from '@Shared/components/atom/Loading';

interface detailTrainingPresenterProps {
  dataDetail: any;
  loading: boolean;
}

const DetailTrainingPresenter = ({
  dataDetail,
  loading,
}: detailTrainingPresenterProps) => {
  return loading ? (
    <Loading size="large" full />
  ) : (
    <LayoutScreen>
      <SectionHeaderDetail
        bannerUrl={
          dataDetail?.coverImage
            ? dataDetail?.coverImage
            : dataDetail?.alternateThumbnailUrl
        }
        level={dataDetail?.level}
        location={dataDetail?.location?.address}
        productType={dataDetail?.productType}
        titleSection={dataDetail?.title}
        category={dataDetail?.category?.name}
        deliveryType={dataDetail?.deliveryType}
        description={dataDetail?.description}
      />
    </LayoutScreen>
  );
};

export default DetailTrainingPresenter;
