import {bluePrimary} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';

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
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
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
    marginHorizontal: scale(5),
    marginVertical: scale(10),
  },
});
