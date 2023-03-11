import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';

interface programIconProps {
  source: any;
  text: string;
  onPress?: any;
  backgroundColor: string;
}

const ProgramIcon = ({
  source = require('@ModuleApp/home/assets/icons/Karir.png'),
  text = 'Prakerja',
  onPress,
  backgroundColor = 'khaki',
}: programIconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: backgroundColor,
          paddingVertical: verticalScale(15),
          paddingHorizontal: scale(15),
          borderRadius: 50,
        }}>
        <Image
          source={source}
          style={{width: scale(20), height: scale(20), tintColor: 'white'}}
        />
      </View>
      <Text
        style={[
          textStyle.textDescription,
          {
            paddingVertical: verticalScale(10),
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ProgramIcon;

const styles = StyleSheet.create({});
