import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../atom/Button/ButtonStandard';
import {SvgUri} from 'react-native-svg';
import {blueAlternative3} from '@Shared/constants/colors';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {scale} from '@Shared/helper/scaling';
import Loading from '../atom/Loading';

export interface panelInformationProps {
  textInformation: string;
  titleButton: string;
  uri: string;
  loading: boolean;
}

const PanelInformation = ({
  textInformation,
  uri,
  titleButton,
  loading,
}: panelInformationProps) => {
  return loading ? (
    <Loading size="small" full={false} transparent={false} />
  ) : (
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
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <Button
          type="primary"
          title={titleButton}
          size="long"
          onPress={() =>
            uri
              ? Linking.openURL(uri)
              : Toast.show({
                  type: 'error',
                  text2: 'ups terjadi kendala',
                })
          }
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
    color: 'black',
    fontSize: scale(16),
    fontFamily: 'Inter-SemiBold',
  },
});
