import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {itemBannerProps} from '@ModuleApp/home/types/bannerTypes';

const ItemBanner = ({url, imageUrl}: itemBannerProps) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Image source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default ItemBanner;

const styles = StyleSheet.create({});
