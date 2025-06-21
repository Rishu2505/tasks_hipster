import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  FlatList,
  Text,
  View,
  Alert,
  ListRenderItem,
} from 'react-native';
import { requestMediaLibraryPermission } from 'src/utils/permissions';
import styles from './styles';
import { cards_list, strings } from './constants';
import { HorizontalCard, VerticalCard, HorizontalCardItemTypes, VerticalCardItemTypes, CustomBottomSheet, HorizontalListHeader, CustomHeader } from 'src/components';
import normalize from 'src/common/normalize';
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

const ThirdTask = () => {
  const [Item, setItem] = useState<VerticalCardItemTypes | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const hasPermission = await requestMediaLibraryPermission();
      if (!hasPermission) {
        Alert.alert('Permission Required', 'Media Library access is needed to continue.');
      }
    })();
  }, []);

  // Handle card tap
  const handleHorizontalCardPress = useCallback((item: HorizontalCardItemTypes) => {
    //console.log('Horizontal Card pressed:', item.title);
  }, []);

  // Memoized renderItem
  const renderHorizontalCard: ListRenderItem<HorizontalCardItemTypes> = useCallback(
    ({ item, index }) => (
      <Animated.View
        entering={FadeInRight.delay(index * 100).duration(800)}
      >
        <HorizontalCard item={item} onPress={handleHorizontalCardPress} />
      </Animated.View>
    ),
    [handleHorizontalCardPress]
  );

  const headerMemo = useMemo(
    () => <HorizontalListHeader onPress={handleHorizontalCardPress} renderItem={renderHorizontalCard} />,
    [handleHorizontalCardPress, renderHorizontalCard]
  );

  const vertical_list = () => {
    return (
      <View style={styles.mainContent}>
        <FlatList
          data={cards_list.main_list}
          keyExtractor={item => item.id.toString()}
          renderItem={renderVerticalCard}
          style={styles.vertical_list}
          contentContainerStyle={styles.vertical_list_container}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerMemo}
        />
      </View>
    )
  }

  // Handle card tap
  const handleCardPress = useCallback((item: VerticalCardItemTypes) => {
    //console.log('Vertical Card pressed:', item.title);
    setItem(item);
    bottomSheetVisibilityToggle()
  }, []);

  // Memoized renderItem
  const renderVerticalCard: ListRenderItem<VerticalCardItemTypes> = useCallback(
    ({ item, index }) => (
      <Animated.View
        entering={FadeInUp.delay(index * 100).duration(400)}
      >
        <VerticalCard item={item} onPress={handleCardPress} />
      </Animated.View>
    ),
    [handleCardPress]
  );

  useEffect(() => {
    if (!bottomSheetVisible) {
      setItem(null)
    }
  }, [bottomSheetVisible])


  const bottomSheetVisibilityToggle = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Main Screen" />
      <View style={styles.cardContainer}>
        {vertical_list()}
      </View>
      {bottomSheetVisible
        &&
        <CustomBottomSheet
          item={Item}
          onDismiss={bottomSheetVisibilityToggle}
        />
      }
    </View>
  );
};

export default ThirdTask;
