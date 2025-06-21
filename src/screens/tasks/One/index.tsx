import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapViewWithPathTracking from './components/MapViewWithPathTracking';
import { useLocationTracker } from './hooks/useLocationTracker';
import styles from './styles';
import { Icon } from 'react-native-paper';
import { goBack } from 'src/navigation/RootNavigation';
import { startBackgroundLocationUpdates } from './background/locationTask';

const LiveTrackingScreen = () => {
  const { path } = useLocationTracker();

  useEffect(() => {
    startBackgroundLocationUpdates(); // Or trigger on button/event
  }, []);

  return (
    <View style={styles.container}>
      <MapViewWithPathTracking path={path} />
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon source="arrow-left" size={24} color="#0F20B5" />
      </TouchableOpacity>
    </View>
  );
};

export default LiveTrackingScreen;