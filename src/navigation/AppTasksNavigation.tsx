import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskOneNavigation from 'src/screens/tasks/One/navigation/TaskOneNavigation';
import TaskTwoNavigation from 'src/screens/tasks/Two/navigation/TaskTwoNavigation';
import TaskThreeNavigation from 'src/screens/tasks/Three/navigation/TaskThreeNavigation';

export type RootStackParamList = {
  TaskOneNavigation: undefined;
  TaskTwoNavigation: undefined;
  TaskThreeNavigation: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

function TasksNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="TaskOneNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TaskOneNavigation" component={TaskOneNavigation} />
        <Stack.Screen name="TaskTwoNavigation" component={TaskTwoNavigation} />
        <Stack.Screen name="TaskThreeNavigation" component={TaskThreeNavigation} />
      </Stack.Navigator>
    </>
  );
}

export default TasksNavigation;
