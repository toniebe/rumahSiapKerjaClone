import {Text, View} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {bluePrimary, whiteColor} from '@Shared/constants/colors';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import {scale, verticalScale} from '@Shared/helper/scaling';

export type ratingProps = {
  rating?: number;
  participant?: number;
};

const CustomRating = ({rating, participant}: ratingProps) => {
  return (
    <View style={{marginVertical: verticalScale(5)}}>
      {rating ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Rating
            type="star"
            ratingImage={require('@ModuleApp/home/assets/icons/star.png')}
            readonly
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            showReadOnlyText
            ratingCount={5}
            imageSize={10}
            startingValue={rating}
            style={{
              flexDirection: 'row',
            }}
          />
          {participant ? (
            <Text>
              {' '}
              {rating} | {participant} Pembeli{' '}
            </Text>
          ) : null}
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Rating
            type="custom"
            ratingImage={require('@ModuleApp/home/assets/icons/star.png')}
            readonly
            tintColor={bluePrimary}
            ratingBackgroundColor={whiteColor}
            ratingColor={whiteColor}
            showReadOnlyText
            ratingCount={1}
            imageSize={10}
            startingValue={1}
          />
          <Text
            style={[
              textStyle.textDescription,
              {fontSize: 10, fontWeight: '300', marginLeft: scale(5)},
            ]}>
            Terbaru
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomRating;
