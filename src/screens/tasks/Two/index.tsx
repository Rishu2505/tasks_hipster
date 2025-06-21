import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LocationItem } from './screens/components/types';
import { fetchDrivingRoute } from './screens/api/routes';
import { navigate } from 'src/navigation/RootNavigation';
import styles from './styles';
import { RootStackParamList } from './navigation/TaskTwoNavigation';
import { BG_IMAGE } from 'src/common/images';
import { BlurView } from 'expo-blur';
import { CustomHeader } from 'src/components';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Props = {
  navigation: RouteProp<RootStackParamList, 'InputScreen'>;
};

const InputScreen = ({ navigation }: Props) => {
  const [start, setStart] = useState<LocationItem | null>(null);
  const [end, setEnd] = useState<LocationItem | null>(null);

  const confirmRoute = async () => {
    try {
      const route = await fetchDrivingRoute(start!, end!);
      navigate('MapScreen', { start, end, route });
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Input Screen" />
      <ImageBackground source={BG_IMAGE} style={styles.imageBackground} >
        <BlurView style={styles.blur} intensity={15} />
        <Animated.View entering={FadeInDown.duration(400)}>
          <TouchableOpacity
            onPress={() => navigate('SearchScreen', { onSelect: setStart })}
            style={styles.selector}
          >
            <Text style={styles.selectorText}>
              {start ? start.label : 'Start Point'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(400)}>
          <TouchableOpacity
            onPress={() => navigate('SearchScreen', { onSelect: setEnd })}
            style={styles.selector}
          >
            <Text style={styles.selectorText}>
              {end ? end.label : 'End Point'}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {start && end && (
          <Animated.View entering={FadeInDown.duration(400)}>
            <TouchableOpacity style={styles.button} onPress={confirmRoute}>
              <Text style={styles.buttonText}>Show Route</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </ImageBackground>
    </View>
  );
}
export default InputScreen;