import {blackColor} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';
import {StyleSheet} from 'react-native';

export const textStyle = StyleSheet.create({
  titleSection: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(20),
    color: blackColor,
  },
  textDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),
    color: blackColor,
  },
});
