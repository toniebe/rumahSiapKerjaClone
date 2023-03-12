import {
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

interface ButtonProps {
  title: string;
  type: string;
  size: string;
  disable?: boolean;
  customStyle?: any;
  customTextStyle?: any;
}

const Button = ({
  title = 'titleButton',
  type = 'primary',
  size = 'long',
  disable = false,
  customStyle,
  customTextStyle,
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
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: 'center',
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
});

const styleButtonActive = StyleSheet.flatten([styles.container]);
const styleButtonDisable = StyleSheet.flatten([
  styles.containerDisable,
  styles.container,
]);
