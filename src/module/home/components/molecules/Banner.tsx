import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {bannerProps} from '@ModuleApp/home/types/bannerTypes';
import ItemBanner from '../atom/ItemBanner';
import Paginator from '@Shared/components/atom/Paginator';
import {scale} from '@Shared/helper/scaling';

const Banner = ({data, loading}: bannerProps) => {
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  return (
   
      <View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item}) => (
            <ItemBanner imageUrl={item.imagePath} url={item.link} />
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

export default Banner;

const styles = StyleSheet.create({});
