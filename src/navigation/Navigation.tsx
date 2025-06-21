import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import SplashScreen from 'src/screens/splash-screen/SplashScreen';
import { navigationRef } from './RootNavigation.js';
import AppOnboardingNavigation from '../screens/appOnboarding/navigation/AppOnboardingNavigation';
import TasksNavigation from './AppTasksNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="AppOnboarding" component={AppOnboardingNavigation} />
      <Stack.Screen name="AppTasks" component={TasksNavigation} />
    </Stack.Navigator>
  );
}
