import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppOnboardingScreen from '..';

const Stack = createNativeStackNavigator();

function OnboardingNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="AppOnboardingScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="AppOnboardingScreen"
          component={AppOnboardingScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default OnboardingNavigation;
