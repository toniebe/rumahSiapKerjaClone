import React from 'react';
import DynamicList from '../atom/DynamicList';
import ItemSectionHeader from './ItemSectionHeader';
import {sectionHeader} from '@ModuleApp/home/types/programStructure';

interface listHeaderProps {
  actionSeeAll: any;
  data: sectionHeader[];
}

const ListHeader = ({actionSeeAll, data}: listHeaderProps) => {
  function renderItem({item}: {item: sectionHeader}): React.ReactElement {
    return (
      <ItemSectionHeader
        dataSection={item.headerDetails}
        actionSeeAll={() => actionSeeAll(item.id)}
        description={item.description}
        title={item.name}
      />
    );
  }
  return <DynamicList data={data} horizontal={false} renderItem={renderItem} />;
};

export default ListHeader;
