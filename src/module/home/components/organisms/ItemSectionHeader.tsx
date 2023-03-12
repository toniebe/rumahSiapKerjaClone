import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import {headerDetailsProps} from '@ModuleApp/home/types/programStructure';
import Section from '@Shared/components/organisms/Section';
import Button from '@Shared/components/atom/Button/ButtonStandard';
import {scale, verticalScale} from '@Shared/helper/scaling';
import ProgramList from '../atom/DynamicList';
import ItemCardProgram from '../atom/ItemCardProgram';

export interface itemSectionHeaderProps {
  title: string;
  description?: string;
  dataSection: headerDetailsProps[];
  actionSeeAll: any;
}

const ItemSectionHeader = ({
  title = 'example header title',
  description,
  actionSeeAll,
  dataSection,
}: itemSectionHeaderProps) => {
  function renderItem({item}: {item: headerDetailsProps}): React.ReactElement {
    return (
      <ItemCardProgram
        hostName={
          item?.host?.fullName ? item.host.fullName : 'Rumah Siap Kerja'
        }
        imageUrl={item?.thumbnailUrl}
        price={item.plans[0].price}
        originalPrice={item.plans[0].originalPrice}
        productType={item.productType}
        title={item.title}
        trainerImageUrl={item.coaches[0].profileImage}
        trainerName={item.coaches[0].name}
        rating={item.currentRating}
        participants={item.participants}
      />
    );
  }
  return (
    <Section>
      <View style={{flex: 1}}>
        <Text style={[textStyle.titleSection, styles.contentContainer]}>
          {title}
        </Text>
        {description ? (
          <Text style={[textStyle.textDescription, styles.contentContainer]}>
            {description}
          </Text>
        ) : null}
        <ProgramList data={dataSection} renderItem={renderItem} />
        <View style={[styles.contentContainer]}>
          <Button
            title="Lihat Semua"
            size="long"
            type="secondary"
            iconUrl={require('@Shared/assets/icon/right-arrow.png')}
            onPress={actionSeeAll}
          />
        </View>
      </View>
    </Section>
  );
};

export default ItemSectionHeader;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
});
