import * as Location from "expo-location";
import { LatLng } from "../types";

let locationSubscription: Location.LocationSubscription | null = null;

export const startLocationUpdates = async (
  onUpdate: (coord: LatLng) => void
) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.warn("Permission to access location was denied");
    return;
  }

  locationSubscription = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000,
      distanceInterval: 10,
    },
    (location) => {
      const { latitude, longitude } = location.coords;
      onUpdate({ latitude, longitude });
    }
  );
};

export const stopLocationUpdates = () => {
  if (locationSubscription) {
    locationSubscription.remove();
    locationSubscription = null;
  }
};
