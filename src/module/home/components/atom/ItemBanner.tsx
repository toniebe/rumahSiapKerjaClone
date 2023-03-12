import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {itemBannerProps} from '@ModuleApp/home/types/bannerTypes';
import {scale, verticalScale} from '@Shared/helper/scaling';
import Toast from 'react-native-toast-message';

const {width} = Dimensions.get('window');
const ItemBanner = ({url, imageUrl}: itemBannerProps) => {
  const openToast = () => {
    Toast.show({
      type: 'error',
      text1: 'hallo halaman ini belum tersedia',
    });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (url ? Linking.openURL(url) : openToast())}>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ItemBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
  },
  image: {
    width: width - 20,
    height: verticalScale(120),
    borderRadius: 10,
  },
});
