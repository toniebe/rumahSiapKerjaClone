import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {
  bluePrimary,
  textDark2,
  textDark3,
  whiteColor,
} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';

interface ButtonProps {
  title: string;
  type: string;
  size: string;
  disable?: boolean;
  customStyle?: any;
  customTextStyle?: any;
  iconUrl?: any;
}

const Button = ({
  title = 'titleButton',
  type = 'primary',
  size = 'long',
  disable = false,
  customStyle,
  customTextStyle,
  iconUrl,
  ...nativeProps
}: ButtonProps & TouchableOpacityProps) => {
  type = type.toLowerCase();
  size = size.toLowerCase();
  return (
    <TouchableOpacity
      style={[
        disable
          ? styleButtonDisable
          : [
              styleButtonActive,
              [
                type === 'primary'
                  ? styles.containerPrimary
                  : styles.containerSecondary,
              ],
            ],
        customStyle
          ? customStyle
          : {
              width: size === 'long' ? '100%' : '50%',
            },
      ]}
      disabled={disable}
      {...nativeProps}>
      <Text
        style={[
          disable
            ? styles.textDisable
            : type === 'primary'
            ? styles.textPrimary
            : styles.textSecondary,
          customTextStyle,
        ]}>
        {title}
      </Text>
      {iconUrl ? <Image source={iconUrl} style={[styles.image]} /> : null}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDisable: {
    backgroundColor: textDark3,
  },
  containerPrimary: {
    backgroundColor: bluePrimary,
  },
  containerSecondary: {
    borderWidth: 1,
    borderColor: bluePrimary,
    backgroundColor: whiteColor,
  },

  textPrimary: {
    color: whiteColor,
    fontSize: 14,
    fontWeight: '600',
  },
  textSecondary: {
    color: bluePrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  textDisable: {
    color: textDark2,
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    marginLeft: scale(8),
    tintColor: bluePrimary,
  },
});

const styleButtonActive = StyleSheet.flatten([styles.container]);
const styleButtonDisable = StyleSheet.flatten([
  styles.containerDisable,
  styles.container,
]);
