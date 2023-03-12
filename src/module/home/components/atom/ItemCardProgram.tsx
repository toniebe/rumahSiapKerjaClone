import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ItemProductType from './ItemProductType';
import {scale, verticalScale} from '@Shared/helper/scaling';
import ItemTrainer from './ItemTrainer';
import CustomRating from './CustomRating';
import {whiteColor} from '@Shared/constants/colors';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import ItemPrice from './ItemPrice';

interface itemCardProgramProps {
  imageUrl?: any;
  title: string;
  productType?: string;
  hostName?: string;
  trainerImageUrl: string;
  trainerName: string;
  rating?: number;
  price: number;
  originalPrice?: number;
  participants?: number;
  actionCard?: any;
}

const ItemCardProgram = ({
  imageUrl,
  title,
  hostName = 'Rumah Siap Kerja',
  price,
  productType,
  trainerImageUrl,
  trainerName,
  originalPrice,
  rating,
  participants,
  actionCard,
}: itemCardProgramProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={actionCard}>
      <ImageBackground
        source={{
          uri: imageUrl,
        }}
        style={{
          flexDirection: 'row',
          height: 100,
          alignItems: 'flex-end',
          flex: 1,
        }}
        imageStyle={{
          height: 100,
          resizeMode: 'cover',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <View
          style={{
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
          }}>
          {productType && <ItemProductType title={productType} />}
        </View>
      </ImageBackground>
      <View style={[styles.contentContainer, {maxWidth: '80%'}]}>
        <Text
          numberOfLines={2}
          style={[textStyle.titleSection, {fontSize: scale(14)}]}>
          {title}
        </Text>
      </View>
      <View
        style={[styles.contentContainer, {marginVertical: verticalScale(10)}]}>
        <ItemTrainer
          hostName={hostName}
          imageUrl={trainerImageUrl}
          trainerName={trainerName}
        />
        <CustomRating rating={rating} participant={participants} />
      </View>
      <View style={[styles.contentContainer, {justifyContent: 'flex-end'}]}>
        <ItemPrice price={price} originalPrice={originalPrice} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardProgram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
    backgroundColor: whiteColor,
    maxWidth: scale(300),
    minWidth: scale(250),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
  },
});
