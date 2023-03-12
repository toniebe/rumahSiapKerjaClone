import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {programProps} from '@ModuleApp/home/types/randomProgram';
import ItemCardProgram from '../atom/ItemCardProgram';

interface programListProps {
  data: programProps[];
}

const ProgramList = ({data}: programListProps) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <ItemCardProgram
          hostName={item?.host?.fullName}
          imageUrl={
            item?.thumbnailUrl ? item.thumbnailUrl : item.alternateThumbnailUrl
          }
          price={item.plans[0].price}
          originalPrice={item.plans[0].originalPrice}
          productType={item.productType}
          title={item.title}
          trainerImageUrl={item.coaches[0].profileImage}
          trainerName={item.coaches[0].name}
          rating={item.currentRating}
          participants={item.participants}
        />
      )}
    />
  );
};

export default ProgramList;
