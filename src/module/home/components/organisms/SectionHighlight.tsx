import {Text} from 'react-native';
import React from 'react';
import Section from '@Shared/components/organisms/Section';
import HiglightList from '../molecules/HiglightList';
import {highlightProps} from '@ModuleApp/home/types/highlights';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import {scale, verticalScale} from '@Shared/helper/scaling';

interface sectionHighlightProps {
  data: highlightProps[];
  loading: boolean;
}

const SectionHighlight = ({data, loading}: sectionHighlightProps) => {
  return (
    <Section>
      <Text
        style={[
          textStyle.textGrey,
          {marginVertical: verticalScale(8), marginHorizontal: scale(20)},
        ]}>
        Pilihan Terbaik Untuk Kamu
      </Text>
      <HiglightList data={data} loading={loading} />
    </Section>
  );
};

export default SectionHighlight;
