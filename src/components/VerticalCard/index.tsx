import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Image } from 'expo-image';

export type VerticalCardItemTypes = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  imageUrl: string;
};

interface VerticalCardProps {
  item: VerticalCardItemTypes;
  onPress: (item: VerticalCardItemTypes) => void;
  containerStyle?: ViewStyle;
}

const VerticalCard = React.memo(
  ({ item, onPress, containerStyle }: VerticalCardProps) => {
    const [loading, setLoading] = useState(true);
    return (
      <TouchableOpacity
        style={[styles.card, containerStyle, { backgroundColor: item?.color }]}
        onPress={() => onPress(item)}
        activeOpacity={0.8}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.imageWrapper}>
            {loading && (
              <View style={styles.loader}>
                <ActivityIndicator size="small" color="#999" />
              </View>
            )}
            <Image
              source={{ uri: item?.imageUrl }}
              style={styles.image}
              onLoadEnd={() => setLoading(false)}
              contentFit="cover"
              transition={300}
            />
          </View>
          <View style={styles.textContentWrapper}>
            <Text ellipsizeMode="tail" style={styles.title}>{item?.title}</Text>
            <Text ellipsizeMode="tail" numberOfLines={2} style={styles.description}>{item?.longDescription}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  (prev, next) =>
    prev.item.color === next.item.color &&
    prev.item.id === next.item.id &&
    prev.item.title === next.item.title &&
    prev.item.description === next.item.description &&
    prev.item.imageUrl === next.item.imageUrl
);

export default VerticalCard;