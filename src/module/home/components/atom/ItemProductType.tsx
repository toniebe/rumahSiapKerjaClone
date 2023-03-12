import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {whiteColor} from '@Shared/constants/colors';
import {scale, verticalScale} from '@Shared/helper/scaling';

interface ItemProductTypeProps {
  title?: string;
}

const ItemProductType = ({title = 'Siap Mahir'}: ItemProductTypeProps) => {
  return <Text style={styles.textProduct}>{title}</Text>;
};

export default ItemProductType;

const styles = StyleSheet.create({
  textProduct: {
    backgroundColor: 'rgba(119,133,141,0.7)',
    color: whiteColor,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(5),
    borderRadius: scale(5),
    fontSize: scale(12),
  },
});
