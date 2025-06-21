import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from 'src/screens/tasks/Two/screens/components/pages/Search';
import MapScreen from 'src/screens/tasks/Two/screens/components/pages/Map';
import InputScreen from '..';

export type RootStackParamList = {
  InputScreen: undefined;
  SearchScreen: { onSelect: (loc: any) => void };
  MapScreen: { start: any; end: any; route: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function TaskTwoNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="InputScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />

      </Stack.Navigator>
    </>
  );
}

export default TaskTwoNavigation;
