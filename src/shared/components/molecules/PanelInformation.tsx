import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../atom/Button/Button';
import {SvgUri} from 'react-native-svg';
import {
  blueAlternative3,
  blueSecondary,
  textDark,
} from '@Shared/constants/colors';

export interface panelInformationProps {
  textInformation: string;
  onPress: any;
}

const PanelInformation = ({
  textInformation,
  onPress,
}: panelInformationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.svgTopContainer}>
        <SvgUri
          uri={
            'https://rumahsiapkerja.com/img/decor-topleft-mobile.a1da58c1.svg'
          }
        />
      </View>
      <View style={styles.containerInformation}>
        <Text style={styles.text}>{textInformation}</Text>
      </View>
      <View style={{}}>
        <Button
          type="primary"
          title="Cek Sekarang"
          size="long"
          onPress={onPress}
          disable={false}
        />
      </View>
      <View style={styles.svgBottomContainer}>
        <SvgUri
          uri={
            'https://rumahsiapkerja.com/img/decor-rightbot-mobile.e562495d.svg'
          }
        />
      </View>
    </View>
  );
};

export default PanelInformation;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: blueAlternative3,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  containerInformation: {
    flex: 2,
    justifyContent: 'center',
  },
  svgTopContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  svgBottomContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  text: {
    color: textDark,
    fontSize: 13,
    fontFamily: 'Inter-Regular',
  },
});
