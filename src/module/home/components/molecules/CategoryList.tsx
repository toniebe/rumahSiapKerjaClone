import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {dataCategoryProps} from '@ModuleApp/home/types/randomProgram';
import ButtonCategory from '../../../../shared/components/atom/Button/ButtonCategory';

interface categoryListProps {
  data: dataCategoryProps[];
  handleCategory: any;
}

const CategoryList = ({data, handleCategory}: categoryListProps) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <ButtonCategory
          categoryCode={item.categoryCode}
          isActive={item.isActive}
          title={item.label}
          onPress={() => handleCategory(item.categoryCode)}
        />
      )}
    />
  );
};

export default CategoryList;
