import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextInputCustom from '@Shared/components/atom/TextInputCustom';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import {announcementProps} from '@ModuleApp/home/types/announcement';
import {scale} from '@Shared/helper/scaling';
import {grey1, whiteColor} from '@Shared/constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface NavigationHomeHeaderProps {
  panelData: announcementProps;
  loading: boolean;
}

const NavigationHomeHeader = ({
  panelData,
  loading,
}: NavigationHomeHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? insets.top : 0},
      ]}>
      <PanelInformation
        textInformation={panelData.description}
        titleButton={panelData.callToAction}
        uri={panelData.url}
        loading={loading}
      />
      <View style={styles.textinputContainer}>
        <View style={{width: '80%'}}>
          <TextInputCustom icon placeholder="Cari program sekarang" />
        </View>
        <TouchableOpacity>
          <Image
            source={require('@Shared/assets/icon/more.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationHomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  textinputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: scale(8),
    width: '100%',
  },
  image: {
    width: scale(25),
    height: scale(25),
    resizeMode: 'contain',
    tintColor: grey1,
  },
});
