import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Image } from 'react-native';
import { LatLng } from '../types';
import { DESTINATION, LIVE_LOCATION } from 'src/common/images';
import { CustomMarker } from 'src/components';

type Props = {
  path: LatLng[];
};

const MapViewWithPathTracking = ({ path }: Props) => {
  const currentPosition = path[path.length - 1];

  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation={false}
      followsUserLocation
      initialRegion={
        currentPosition
          ? {
            ...currentPosition,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }
          : undefined
      }
    >
      {/* Custom location marker */}
      {currentPosition && (
        <CustomMarker
          title=" 👋 Hipster"
          coordinate={currentPosition}
          icon={DESTINATION}
          size={35}
          bgColor={'rgba(0,178,72,0.6)'}
        />
      )}

      {/* Path Polyline */}
      {path.length > 1 && (
        <Polyline
          coordinates={path}
          strokeWidth={5}
          strokeColor="rgba(50,156,168,0.9)"
          //lineDashPattern={[5, 5]}
        />
      )}
    </MapView>
  );
};

export default MapViewWithPathTracking;
