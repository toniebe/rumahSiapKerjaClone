import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CertificateContainer from '@ModuleApp/certificate/container/CertificateContainer';
import HomeContainer from '@ModuleApp/home/container/HomeContainer';
import TransactionsContainer from '@ModuleApp/transactions/container/TransactionsContainer';
import ActivityContainer from '@ModuleApp/activity/container/ActivityContainer';
import {MyTabBar} from '@CoreApp/components/MyTabBar';

const BottomRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: require('@Shared/assets/icon/tabIcon/iconRumah.png'),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionsContainer}
        options={{
          tabBarIcon: require('@Shared/assets/icon/tabIcon/transaksi.png'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityContainer}
        options={{
          tabBarIcon: require('@Shared/assets/icon/tabIcon/aktivitas.png'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Certificate"
        component={CertificateContainer}
        options={{
          tabBarIcon: require('@Shared/assets/icon/tabIcon/sertifikat.png'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRouter;
