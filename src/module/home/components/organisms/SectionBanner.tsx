import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from '@Shared/components/organisms/Section';
import Banner from '../molecules/Banner';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import {contentTypes} from '@ModuleApp/home/types/bannerTypes';
import ProgramIcon from '../atom/ProgramIcon';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {
  blueAlternative1,
  greenPrimary,
  purplePrimary,
  yellowPrimary,
} from '@Shared/constants/colors';

export interface sectionBannerProps {
  dataBanner: contentTypes[];
  loading: boolean;
}

const SectionBanner = ({dataBanner, loading}: sectionBannerProps) => {
  return (
    <Section>
      <Banner data={dataBanner} loading={loading} />
      <View>
        <Text style={[textStyle.titleSection]}>Solusi Program Terlengkap</Text>
        <View style={styles.programContainer}>
          <ProgramIcon
            source={require('@ModuleApp/home/assets/icons/Pja.png')}
            text={'Prakerja'}
            backgroundColor={blueAlternative1}
          />
          <ProgramIcon
            source={require('@ModuleApp/home/assets/icons/Usaha.png')}
            text="Siap Usaha"
            backgroundColor={yellowPrimary}
          />
          <ProgramIcon
            source={require('@ModuleApp/home/assets/icons/Mahir.png')}
            text="Siap Mahir"
            backgroundColor={greenPrimary}
          />
          <ProgramIcon
            source={require('@ModuleApp/home/assets/icons/Karir.png')}
            text="Siap Karier"
            backgroundColor={purplePrimary}
          />
        </View>
      </View>
    </Section>
  );
};

export default SectionBanner;

const styles = StyleSheet.create({
  programContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(10),
  },
});
