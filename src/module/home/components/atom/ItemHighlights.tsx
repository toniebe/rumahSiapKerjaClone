import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {whiteColor} from '@Shared/constants/colors';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import ButtonLink from '@Shared/components/atom/Button/ButtonLink';

export interface ItemHighlightsProps {
  title: string;
  description: string;
  buttonTitle: string;
  imageUrl: any;
}

const {width} = Dimensions.get('window');

const ItemHighlights = ({
  title = 'Deploy Coy',
  description = 'Dalam kelas ini blabla',
  buttonTitle = 'cek selengkapnya!',
  imageUrl,
}: ItemHighlightsProps) => {
  return (
    <View style={styles.container}>
      <Text style={textStyle.titleSection}>{title}</Text>
      <Text style={textStyle.textDescription}>{description}</Text>
      <ButtonLink title={buttonTitle} />
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ItemHighlights;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    width: width,
    justifyContent: 'space-around',
  },
  image: {
    width: width - scale(20),
    height: verticalScale(180),
    borderRadius: scale(8),
  },
});
