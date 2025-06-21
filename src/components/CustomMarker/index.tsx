import React from 'react';
import { Marker } from 'react-native-maps';
import { View, Image, ImageSourcePropType, Text } from 'react-native';
import styles from './styles';

type Props = {
    coordinate: { latitude: number; longitude: number };
    icon: ImageSourcePropType;
    size?: number;
    bgColor?: string;
    title?: string;
};

const CustomMarker = ({
    coordinate,
    icon,
    size = 28,
    bgColor = '#00B2AC',
    title = '',
}: Props) => {
    return (
        <Marker coordinate={coordinate} tracksViewChanges={true} title={title}>
            <View style={[styles.pinContainer,
            { backgroundColor: bgColor, borderRadius: size }
            ]}>
                <Image
                    source={icon}
                    style={{ width: size, height: size }}
                    resizeMode="contain"
                />

            </View>
        </Marker>
    );
};

export default CustomMarker;
