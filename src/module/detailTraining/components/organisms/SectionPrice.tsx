import {Text} from 'react-native';
import React from 'react';
import Section from '@Shared/components/organisms/Section';
import {toRupiahFormat} from '@Shared/helper/formatRupiah';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {greenPrimary, textDark2} from '@Shared/constants/colors';

interface sectionPriceProps {
  price?: number;
}

const SectionPrice = ({price}: sectionPriceProps) => {
  return (
    <Section>
      <Text
        style={{
          fontFamily: 'Inter-SemiBold',
          fontSize: scale(24),
          color: price ? textDark2 : greenPrimary,
          paddingHorizontal: scale(20),
          paddingVertical: verticalScale(10),
        }}>
        {price ? toRupiahFormat(price) : 'Gratis'}
      </Text>
    </Section>
  );
};

export default SectionPrice;
