import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThirdTask from '..';

export type RootStackParamList = {
  ThirdTask: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function TaskThreeNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="ThirdTask"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ThirdTask" component={ThirdTask} />
      </Stack.Navigator>
    </>
  );
}

export default TaskThreeNavigation;
