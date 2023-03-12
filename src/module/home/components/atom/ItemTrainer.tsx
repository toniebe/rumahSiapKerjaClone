import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '@Shared/helper/scaling';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';
import {textDark2} from '@Shared/constants/colors';

export interface itemTrainerProps {
  hostName: string;
  trainerName: string;
  imageUrl: string;
}

const ItemTrainer = ({
  hostName = 'Rumah Siap Kerja',
  trainerName = 'Miswanto',
  imageUrl = 'https://cdn2.rumahsiapkerja.com/user-profile-images/4177aa01-3e93-47f5-8cee-986aa3e8ce391659023952466.jpg',
}: itemTrainerProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={{marginLeft: scale(6)}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[textStyle.textGrey, {fontWeight: '400'}]}>by</Text>
          <Text
            numberOfLines={2}
            style={[
              textStyle.textGrey,
              {width: '100%', fontWeight: '700', color: textDark2},
            ]}>
            {hostName}
          </Text>
        </View>
        <Text
          style={[textStyle.textGrey, {width: '50%', fontWeight: '400'}]}
          numberOfLines={2}>
          {trainerName}
        </Text>
      </View>
    </View>
  );
};

export default ItemTrainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scale(40),
    height: scale(40),
    borderRadius: 50,
  },
});
