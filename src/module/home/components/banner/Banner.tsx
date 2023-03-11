import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {bannerProps} from '@ModuleApp/home/types/bannerTypes';
import {FlashList} from '@shopify/flash-list';
import ItemBanner from './ItemBanner';
import Paginator from '@Shared/components/atom/Paginator';

const Banner = ({data}: bannerProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  return (
    <View>
      <FlashList
        data={data}
        renderItem={({item}) => (
          <ItemBanner imageUrl={item.imagePath} url={item.link} />
        )}
      />
      <Paginator data={data} scrollX={scrollX} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
