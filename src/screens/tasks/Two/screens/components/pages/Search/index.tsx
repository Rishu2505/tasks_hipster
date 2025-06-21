import React, { useState } from 'react';
import {
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';
import { goBack } from 'src/navigation/RootNavigation';
import { RootStackParamList } from 'src/screens/tasks/Two/navigation/TaskTwoNavigation';
import { fetchLocationResults } from '../../../api/routes';
import { CustomHeader } from 'src/components';
import { BlurView } from 'expo-blur';
import { BG_IMAGE } from 'src/common/images';
import Animated, { FadeInUp } from 'react-native-reanimated';

type Props = {
  route: RouteProp<RootStackParamList, 'SearchScreen'>;
};

const SearchScreen = ({ route }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const search = async (text: string) => {
    setQuery(text);
    const data = await fetchLocationResults(text);
    setResults(data);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <CustomHeader title="Search Screen" />
      <ImageBackground source={BG_IMAGE} style={styles.imageBackground} >
        <View style={styles.mainView}>
          <BlurView style={styles.blur} intensity={15} />
          <TextInput
            style={styles.input}
            placeholder="Search location"
            value={query}
            onChangeText={search}
          />
          <FlatList
            style={styles.list}
            data={results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeInUp.delay(index * 100).duration(400)}
              >
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() => {
                    route.params.onSelect({
                      label: item.SEARCHVAL,
                      lat: parseFloat(item.LATITUDE),
                      lng: parseFloat(item.LONGITUDE),
                    });
                    goBack();
                  }}
                >
                  <Text style={styles.resultText}>{item.SEARCHVAL}</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;
