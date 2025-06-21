import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveTrackingScreen from '..';

export type RootStackParamList = {
  LiveTrackingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function TaskTwoNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="LiveTrackingScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LiveTrackingScreen" component={LiveTrackingScreen} />
      </Stack.Navigator>
    </>
  );
}

export default TaskTwoNavigation;
