import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashContainer from './SplashScreen/container/SplashContainer';
import BottomRouter from './router/BottomRouter';
import DetailTrainingContainer from '@ModuleApp/detailTraining/container/DetailTrainingContainer';

const Core = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashContainer}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DetailTraining"
          component={DetailTrainingContainer}
        />
        <Stack.Screen
          name="Dashboard"
          component={BottomRouter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Core;
