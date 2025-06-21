import React from 'react';
import {View} from 'react-native';
import AppOnboarding from 'src/components/AppOnboarding';
import styles from './styles';

const AppOnboardingScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <AppOnboarding navigation={navigation} />
    </View>
  );
};

export default AppOnboardingScreen;
