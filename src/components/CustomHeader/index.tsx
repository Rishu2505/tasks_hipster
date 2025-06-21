import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { Icon } from 'react-native-paper';
import styles from './styles';

type Props = {
    title: string;
    icon?: IconSource;
};

export default function CustomHeader({ title, icon = 'arrow-left' }: Props) {
    const navigation = useNavigation();

    const handleBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backRow} onPress={handleBack}>
                <Icon source={icon} size={24} color="#0F20B5" />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
