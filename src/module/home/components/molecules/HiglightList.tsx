import {View, Animated} from 'react-native';
import React, {useRef} from 'react';
import {highlightProps} from '@ModuleApp/home/types/highlights';
import Loading from '@Shared/components/atom/Loading';
import Paginator from '@Shared/components/atom/Paginator';
import {FlatList} from 'react-native-gesture-handler';
import ItemHighlights from '../atom/ItemHighlights';
import {scale} from '@Shared/helper/scaling';

interface highlightListProps {
  data: highlightProps[];
  loading: boolean;
}

const HiglightList = ({data, loading}: highlightListProps) => {
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  return loading ? (
    <Loading size="small" />
  ) : (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => (
          <ItemHighlights
            buttonTitle={item.callToAction}
            description={item.description}
            title={item.name}
            imageUrl={
              item?.coreProgram?.thumbnailUrl
                ? item.coreProgram.thumbnailUrl
                : item.coreProgram.alternateThumbnailUrl
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        snapToAlignment={'center'}
        decelerationRate={'normal'}
      />
      <View style={{paddingHorizontal: scale(10)}}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default HiglightList;
