import {bluePrimary, textDark3} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';
import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';

interface PaginatorProps {
  data: any[]; // Modify data type according to your needs
  scrollX: Animated.Value;
}

export default function Paginator({data, scrollX}: PaginatorProps) {
  const {width} = useWindowDimensions();

  return (
    <View style={{flexDirection: 'row', height: scale(64)}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [textDark3, bluePrimary, textDark3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, backgroundColor: dotColor}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: bluePrimary,
    marginHorizontal: scale(4),
    marginVertical: scale(10),
  },
});
