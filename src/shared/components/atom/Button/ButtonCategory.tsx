import {StyleSheet, TouchableOpacityProps} from 'react-native';
import React from 'react';
import Button from '@Shared/components/atom/Button/ButtonStandard';
import {
  bluePrimary,
  textDark3,
  textGrey,
  whiteColor,
} from '@Shared/constants/colors';
import {scale, verticalScale} from '@Shared/helper/scaling';

export interface buttonCategoryProps {
  title?: string;
  categoryCode: string;
  isActive: boolean;
  onPress?: any;
  customFontStyle?: any;
}

const ButtonCategory = ({
  title,
  isActive,
  onPress,
  customFontStyle,
}: buttonCategoryProps & TouchableOpacityProps) => {
  return (
    <Button
      size="short"
      type="primary"
      title={title}
      customStyle={[
        styles.buttonContainer,
        !isActive ? styles.buttonInActive : styles.buttonActive,
      ]}
      customTextStyle={[
        customFontStyle,
        !isActive ? styles.textInActive : styles.textActive,
      ]}
      onPress={onPress}
    />
  );
};

export default ButtonCategory;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: whiteColor,
  },
  buttonActive: {
    borderColor: bluePrimary,
  },
  buttonInActive: {
    borderColor: textGrey,
  },
  textInActive: {
    color: textDark3,
  },
  textActive: {
    color: bluePrimary,
  },
});
