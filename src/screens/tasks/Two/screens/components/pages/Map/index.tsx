import React, { useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { Polyline, Marker, LatLng } from 'react-native-maps';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';
import { goBack } from 'src/navigation/RootNavigation';
import { RootStackParamList } from 'src/screens/tasks/Two/navigation/TaskTwoNavigation';
import { Icon } from 'react-native-paper';
import { DESTINATION, ORIGIN } from 'src/common/images';
import { CustomMarker } from 'src/components';

type Props = {
  route: RouteProp<RootStackParamList, 'MapScreen'>;
};

const MapScreen = ({ route }: Props) => {
  const { start, end, route: routeData } = route.params;
  const coordinates: LatLng[] = routeData.geometry.coordinates.map(([lng, lat]: number[]) => ({
    latitude: lat,
    longitude: lng,
  }));

  const mapRef = useRef<MapView | null>(null);

  const fitRoute = () => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: {
          top: 80,
          right: 40,
          bottom: 80,
          left: 40,
        },
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={fitRoute} // Automatically fit route when map is ready
        onLayout={fitRoute}   // Fallback for Android
      >
        <Polyline
          coordinates={coordinates}
          strokeWidth={5}
          strokeColor="rgba(50,156,168,0.9)"
        />
        <CustomMarker
          title="Origin"
          coordinate={{ latitude: start.lat, longitude: start.lng }}
          icon={ORIGIN}
          size={25}
          bgColor={'rgba(0,178,72,0.6)'}
        />
        <CustomMarker
          title="Destination"
          coordinate={{ latitude: end.lat, longitude: end.lng }}
          icon={DESTINATION}
          size={35}
          bgColor={'rgba(0,178,72,0.6)'}
        />
      </MapView>

      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon source="arrow-left" size={24} color="#0F20B5" />
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
