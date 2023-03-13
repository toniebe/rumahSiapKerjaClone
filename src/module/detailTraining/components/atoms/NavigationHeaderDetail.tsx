import {
  Alert,
  Image,
  Share,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '@Shared/helper/scaling';
import {textDark2, whiteColor} from '@Shared/constants/colors';

interface NavigationHeaderDetailProps {
  actionBack: any;
  textShare: string;
}

const NavigationHeaderDetail = ({
  actionBack,
  textShare,
}: NavigationHeaderDetailProps) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: textShare,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={actionBack}>
        <Image
          source={require('@Shared/assets/icon/left-arrow.png')}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onShare}>
        <Image
          source={require('@Shared/assets/icon/share.png')}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NavigationHeaderDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  image: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    tintColor: textDark2,
  },
});
