import React, { memo } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { HorizontalCardItemTypes } from 'src/components';
import styles from './styles';
import normalize from 'src/common/normalize';
import { cards_list, strings } from 'src/screens/tasks/Three/constants';

interface Props {
  onPress: (item: HorizontalCardItemTypes) => void;
  renderItem: ListRenderItem<HorizontalCardItemTypes>;
}

const HorizontalListHeader = memo(({ onPress, renderItem }: Props) => {
  return (
    <View>
      <Text style={styles.title} numberOfLines={1}>{strings.sections.featured}</Text>
      <FlatList
        data={cards_list.header_list}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.horizontal_list}
        contentContainerStyle={styles.horizontal_list_container}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={[styles.title, { marginTop: normalize(10), marginBottom: normalize(-5) }]} numberOfLines={1}>
        {strings.sections.recents}
      </Text>
    </View>
  );
});

export default HorizontalListHeader;