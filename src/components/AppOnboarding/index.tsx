import {
  View,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useCallback, useRef, useState } from 'react';
import { appOnBoardingArray } from './constants';
import styles from './styles';
import normalize from 'src/common/normalize';
import Button from 'src/assets/images/app_onboarding/button.svg';
import { navigate } from 'src/navigation/RootNavigation';
import AnimatedReanimated, { FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const AppOnboarding = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const goToNextScreen = useCallback(
    (screenName: string) => {
      navigate('AppTasks', { screen: screenName });
    },
    [navigation],
  );

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / width);
        if (index !== currentIndex) setCurrentIndex(index);
      },
    },
  );

  const slideToNext = () => {
    if (currentIndex === 0) goToNextScreen('TaskOneNavigation');
    else if (currentIndex === 1) goToNextScreen('TaskTwoNavigation');
    else if (currentIndex === 2) goToNextScreen('TaskThreeNavigation');
  };

  /* ---------- IMAGE SWIPE ---------- */
  const renderImageSwipe = () => (
    <Animated.ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      bounces={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled={false}
      onScroll={onScroll}
      style={{ flexGrow: 0 }}
    >
      {appOnBoardingArray.map((item, i) => (
        <View key={i.toString()} style={{ width }}>
          <ImageBackground source={item.bgImage} style={styles.imageBackground} />
        </View>
      ))}
    </Animated.ScrollView>
  );

  /* ---------- INDICATORS ---------- */
  const indicatorView = () => (
    <View style={styles.indicatorContainer} pointerEvents="none">
      {appOnBoardingArray.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.2, 0.8],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['rgba(15,32,181,0.16)', '#0F20B5', 'rgba(15,32,181,0.16)'],
          extrapolate: 'clamp',
        });

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [normalize(11), normalize(20), normalize(11)],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[
              styles.indicator,
              { transform: [{ scale }], backgroundColor, width: dotWidth },
            ]}
            pointerEvents="none"
          />
        );
      })}
    </View>
  );

  /* ---------- OVERLAY CONTENT ---------- */
  const renderContent = () => {
    const { title, heading, description } = appOnBoardingArray[currentIndex];

    return (
      <View style={styles.absoluteLayout} pointerEvents="box-none">
        {/* If you suspect BlurView interference, comment it out */}
        <BlurView style={styles.blur} intensity={10} pointerEvents="none" />

        <View style={styles.animatedWrapper} pointerEvents="box-none">
          <AnimatedReanimated.View
            key={`${title}-A`}
            entering={FadeInUp.delay(100).duration(400)}
            pointerEvents="none"
          >
            <Text style={styles.title}>{title}</Text>
          </AnimatedReanimated.View>

          <AnimatedReanimated.View
            key={`${title}-B`}
            entering={FadeInUp.delay(200).duration(400)}
            pointerEvents="none"
          >
            <Text style={styles.heading}>{heading}</Text>
          </AnimatedReanimated.View>

          <AnimatedReanimated.View
            key={`${title}-C`}
            entering={FadeInUp.delay(300).duration(400)}
            pointerEvents="none"
          >
            <Text style={styles.description}>{description}</Text>
          </AnimatedReanimated.View>
        </View>

        <View style={styles.rowView} pointerEvents="box-none">
          {indicatorView()}
          <TouchableOpacity activeOpacity={0.8} onPress={slideToNext}>
            <Button height={normalize(40)} width={normalize(40)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderImageSwipe()}
      {renderContent()}
    </View>
  );
};

export default AppOnboarding;
