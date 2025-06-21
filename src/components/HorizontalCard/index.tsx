import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Image, ImageBackground } from 'expo-image';
import { BlurView } from 'expo-blur';

export type HorizontalCardItemTypes = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  imageUrl: string;
};

interface HorizontalCardProps {
  item: HorizontalCardItemTypes;
  onPress: (item: HorizontalCardItemTypes) => void;
  containerStyle?: ViewStyle;
}

const HorizontalCard = React.memo(
  ({ item, onPress, containerStyle }: HorizontalCardProps) => {
    return (
      <View style={[styles.card, containerStyle,]}>
        <ImageBackground
          source={item?.imageUrl}
          style={[styles.imageBG]}
        >
          <BlurView style={styles.blur} intensity={10} />
          <View style={[styles.textContainer, { transform: [{ rotate: '-45deg' }] }]}>
            <Text ellipsizeMode="tail" style={[styles.title]}>{item?.title}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  },
  (prev, next) =>
    prev.item.color === next.item.color &&
    prev.item.id === next.item.id &&
    prev.item.title === next.item.title &&
    prev.item.description === next.item.description &&
    prev.item.imageUrl === next.item.imageUrl
);

export default HorizontalCard;