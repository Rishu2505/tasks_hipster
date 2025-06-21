import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Dimensions, Keyboard, ListRenderItem, FlatList, Platform } from 'react-native';
import { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModal, BottomSheetScrollView, useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import { VerticalCardItemTypes } from '../VerticalCard';
import styles from './styles';
import normalize from 'src/common/normalize';
import { FullWindowOverlay } from 'react-native-screens';
import HorizontalCard, { HorizontalCardItemTypes } from '../HorizontalCard';
import { cards_list } from 'src/screens/tasks/Three/constants';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInRight,
  FadeInUp,
  FadeInDown,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

type Props = {
  item: VerticalCardItemTypes | null;
  onDismiss: () => void;
};

const CustomBottomSheet = ({ item, onDismiss }: Props) => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const screenHeight = Dimensions.get('window').height;
  const snapPoints = useMemo(() => {
    if (!contentHeight) return ['75%', '85%']; // fallback
    return contentHeight < screenHeight * 0.7
      ? [contentHeight, '85%']
      : ['75%', '85%'];
  }, [contentHeight]);


  useEffect(() => {
    openSheet();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      closeSheet();
    }
  }, []);

  const openSheet = () => {
    bottomSheetRef?.current?.snapToIndex(0);
    setBottomSheetIndex(0);
    bottomSheetRef.current?.present();
    Keyboard.dismiss();
  };
  const closeSheet = () => {
    setBottomSheetIndex(-1);
    bottomSheetRef.current?.close();
  };

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 540,
  });

  const renderContainerComponent = useCallback(
    ({ children }) =>  Platform.OS === 'ios' ? <FullWindowOverlay>{children}</FullWindowOverlay> : <>{children}</>,
    [],
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={1}
        style={{ backgroundColor: 'rgba(17, 17, 17, 0.70)' }}
        pressBehavior="close"
        disappearsOnIndex={-1}
      >
      </BottomSheetBackdrop>
    ),
    [],
  );
  if (!item) return null;

  const horizontal_cards = () => {
    return (
      <FlatList
        data={cards_list.header_list}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={renderHorizontalCard}
        style={styles.horizontal_list}
        contentContainerStyle={styles.horizontal_list_container}
        showsHorizontalScrollIndicator={false}
      />
    )
  }

  // Handle card tap
  const handleHorizontalCardPress = useCallback((item: HorizontalCardItemTypes) => {
    //console.log('Horizontal Card pressed:', item.title);
  }, []);

  // Memoized renderItem
  const renderHorizontalCard: ListRenderItem<HorizontalCardItemTypes> = useCallback(
    ({ item, index }) => (
      <Animated.View entering={FadeInRight.delay(index * 100).duration(800)}>
        <HorizontalCard
          containerStyle={{ height: normalize(120), width: normalize(120) }}
          item={item}
          onPress={handleHorizontalCardPress}
        />
      </Animated.View>
    ),
    [handleHorizontalCardPress]
  );

  const text_content = () => {
    let { title, longDescription } = item;
    return (
      <Animated.View entering={FadeInDown.duration(400)}>
        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{longDescription}</Text>
        </View>
      </Animated.View>
    )
  }


  return (
    <BottomSheetModal
      containerComponent={renderContainerComponent}
      ref={bottomSheetRef}
      stackBehavior="push"
      index={bottomSheetIndex}
      handleStyle={styles.handleStyle}
      animationConfigs={animationConfigs}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="none"
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      //enableDynamicSizing
      enableDismissOnClose
      enableOverDrag={false}
      onChange={handleSheetChanges}
      onDismiss={onDismiss}
      backgroundStyle={styles.bottomSheet}
      backdropComponent={renderBackdrop}>
      <View style={styles.indicator}></View>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollConatiner}>
        <View
          onLayout={e => setContentHeight(e.nativeEvent.layout.height)}
        >
          <View style={styles.draggableArea}>
            {horizontal_cards()}
            {text_content()}
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;