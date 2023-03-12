import {Text, View} from 'react-native';
import React from 'react';
import Section from '@Shared/components/organisms/Section';
import ProgramList from '../molecules/ProgramList';
import {
  dataCategoryProps,
  programProps,
} from '@ModuleApp/home/types/randomProgram';
import CategoryList from '../molecules/CategoryList';
import Loading from '@Shared/components/atom/Loading';
import {whiteColor} from '@Shared/constants/colors';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';

interface sectionRandomProgramProps {
  dataCategory: dataCategoryProps[];
  dataProgram: programProps[];
  handleCategory: any;
  loading: boolean;
}

const SectionRandomProgram = ({
  dataProgram,
  dataCategory,
  handleCategory,
  loading,
}: sectionRandomProgramProps) => {
  return (
    <Section>
      <View
        style={{
          flex: 1,
          backgroundColor: whiteColor,
          paddingVertical: verticalScale(20),
        }}>
        <View style={{paddingHorizontal: scale(20), width: '80%'}}>
          <Text style={textStyle.titleSection}>Jelajahi Program Kami</Text>
          <Text style={[textStyle.textDescription]}>
            Rasakan pengalaman belajar praktis, buat Kamu semakin optimis
          </Text>
        </View>
        <CategoryList data={dataCategory} handleCategory={handleCategory} />
        <View style={{flex: 1, marginTop: verticalScale(10)}}>
          {loading ? (
            <Loading size="large" full />
          ) : (
            <ProgramList data={dataProgram} />
          )}
        </View>
      </View>
    </Section>
  );
};

export default SectionRandomProgram;
