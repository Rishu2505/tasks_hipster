import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import './src/screens/tasks/One/background/locationTask';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      OutfitSemiBold: require('./src/assets/fonts/Outfit-SemiBold.ttf'),
      OutfitBold: require('./src/assets/fonts/Outfit-Bold.ttf'),
      OutfitMedium: require('./src/assets/fonts/Outfit-Medium.ttf'),
      OutfitRegular: require('./src/assets/fonts/Outfit-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    //AsyncStorage.clear()
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Navigation />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
