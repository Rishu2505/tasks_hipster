import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { LatLng } from "../types";
import { saveRoute, loadRoute } from "../storage/routeStorage";

const LOCATION_TASK_NAME = "background-location-task";

TaskManager.defineTask(
  LOCATION_TASK_NAME,
  async ({
    data,
    error,
  }: {
    data: { locations: Location.LocationObject[] };
    error: any;
  }) => {
    if (error) return console.error(error);
    const { locations } = data;
    const latest = locations[0];
    const newCoord: LatLng = {
      latitude: latest.coords.latitude,
      longitude: latest.coords.longitude,
    };
    const existing = await loadRoute();
    await saveRoute([...existing, newCoord]);
  }
);

export const startBackgroundLocationUpdates = async () => {
  const started = await Location.hasStartedLocationUpdatesAsync(
    LOCATION_TASK_NAME
  );
  if (!started) {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000,
      distanceInterval: 10,
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: "Location Tracking",
        notificationBody: "Tracking your location in the background",
      },
    });
  }
};

export const stopBackgroundLocationUpdates = async () => {
  const started = await Location.hasStartedLocationUpdatesAsync(
    LOCATION_TASK_NAME
  );
  if (started) {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
  }
};
