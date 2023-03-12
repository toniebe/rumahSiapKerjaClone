import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {toRupiahFormat} from '@Shared/helper/formatRupiah';
import {calculateDiscount} from '@Shared/helper/calculateDiscount';
import {scale} from '@Shared/helper/scaling';
import {greenPrimary, textDark} from '@Shared/constants/colors';

export interface itemPriceProps {
  originalPrice?: number;
  price: number;
}

const ItemPrice = ({originalPrice, price}: itemPriceProps) => {
  return (
    <View>
      {originalPrice ? (
        <View style={styles.discountCointainer}>
          <View style={styles.badgeDiscount}>
            <Text style={styles.discountText}>
              {calculateDiscount(originalPrice, price)} %
            </Text>
          </View>
          <Text style={styles.originalPrice}>
            {toRupiahFormat(originalPrice)}
          </Text>
        </View>
      ) : null}

      <Text style={[price === 0 ? styles.freePrice : styles.price]}>
        {price === 0 ? 'Gratis' : toRupiahFormat(price)}
      </Text>
    </View>
  );
};

export default ItemPrice;

const styles = StyleSheet.create({
  discountCointainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(12),
    textDecorationLine: 'line-through',
  },
  discountText: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(12),
    color: 'red',
  },
  badgeDiscount: {
    marginRight: scale(4),
    paddingVertical: scale(2),
    paddingHorizontal: scale(4),
    borderRadius: scale(4),
    backgroundColor: 'rgba(193,0,0,0.1)',
  },
  price: {
    fontFamily: 'Inter-SemiBold',
    color: textDark,
    fontSize: scale(16),
  },
  freePrice: {
    fontFamily: 'Inter-SemiBold',
    color: greenPrimary,
    fontSize: scale(16),
  },
});
