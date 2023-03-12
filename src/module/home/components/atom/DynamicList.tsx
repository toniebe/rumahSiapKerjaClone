import React from 'react';

import {VirtualizedList} from 'react-native';

interface DynamicListProps<T> {
  data: T[];
  renderItem: ({item}: {item: T}) => React.ReactElement;
  horizontal?: boolean;
}

function DynamicList<T>({
  data,
  renderItem,
  horizontal = true,
}: DynamicListProps<T>): React.ReactElement {
  return (
    <VirtualizedList
      keyExtractor={(item, index) => index.toLocaleString()}
      getItemCount={() => data.length}
      getItem={(data, index) => data[index]}
      data={data}
      horizontal={horizontal}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}

export default DynamicList;
