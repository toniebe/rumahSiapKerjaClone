import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from '@Shared/components/organisms/Section';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import ItemTrainingSpec from '../atoms/ItemTrainingSpec';

interface SectionHeaderDetailProps {
  bannerUrl?: any;
  titleSection?: string;
  description?: string;
  productType?: string;
  category?: string;
  level?: string;
  location?: string;
  deliveryType?: string;
}

const SectionHeaderDetail = ({
  bannerUrl,
  titleSection,
  description,
  productType,
  category,
  level,
  location,
  deliveryType,
}: SectionHeaderDetailProps) => {
  return (
    <Section>
      <View style={styles.container}>
        {bannerUrl && (
          <Image source={{uri: bannerUrl}} style={styles.imageBanner} />
        )}
        <Text style={[textStyle.titleSection, styles.titleText]}>
          {titleSection}
        </Text>
        {description ? (
          <Text style={textStyle.textDescription}>{description}</Text>
        ) : null}
        <ItemTrainingSpec
          type="button"
          title={'Tipe'}
          titleButton={productType}
          doubleButton={deliveryType ? true : false}
          secondTitleButton={deliveryType}
          iconUrl={require('@Shared/assets/icon/more.png')}
        />
        <ItemTrainingSpec
          type="button"
          title={'Kategori'}
          titleButton={category}
          iconUrl={require('@Shared/assets/icon/category.png')}
        />
        <ItemTrainingSpec
          type="button"
          title={'Level'}
          titleButton={level}
          iconUrl={require('@Shared/assets/icon/level-up.png')}
        />
        <ItemTrainingSpec
          type="text"
          title={'Lokasi'}
          titleButton={location}
          iconUrl={require('@Shared/assets/icon/location.png')}
        />
      </View>
    </Section>
  );
};

export default SectionHeaderDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
  imageBanner: {
    width: '100%',
    height: scale(200),
    borderRadius: scale(4),
  },
  titleText: {
    marginVertical: verticalScale(10),
  },
});
