import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {bluePrimary} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';

interface buttonLinkProps {
  title: string;
  iconUrl?: any;
}

const ButtonLink = ({
  title = 'Cek Selengkapnya',
  iconUrl = require('@Shared/assets/icon/right-arrow.png'),
  ...nativeProps
}: buttonLinkProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} {...nativeProps}>
      <Text style={styles.text}>{title}</Text>
      <Image source={iconUrl} style={[styles.image]} />
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    tintColor: bluePrimary,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(15),
    color: bluePrimary,
    marginRight: scale(10),
  },
});
