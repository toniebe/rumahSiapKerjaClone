import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LayoutScreen from '@Shared/components/organisms/LayoutScreen';
import Button from '@Shared/components/atom/Button/Button';
import PanelInformation from '@Shared/components/molecules/PanelInformation';
import Loading from '@Shared/components/atom/Loading';

const HomePresenter = () => {
  return (
    <LayoutScreen style={{flex: 1}}>
      <View style={{flex: 1}}>
        <PanelInformation
          textInformation="Yuk Ikut undian REBAHAN dan dapatkan kesempatan menang Grand Prize & E-Wallet! "
          onPress={() => console.log('hello guys')}
        />
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <Loading transparent={false} full={false} />
        </View>
      </View>
    </LayoutScreen>
  );
};

export default HomePresenter;

const styles = StyleSheet.create({});
