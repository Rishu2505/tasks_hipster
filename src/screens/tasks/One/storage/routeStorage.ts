import AsyncStorage from '@react-native-async-storage/async-storage';
import { LatLng } from '../types';
const ROUTE_KEY = 'savedRoute';

export const saveRoute = async (path: LatLng[]) => {
  await AsyncStorage.setItem(ROUTE_KEY, JSON.stringify(path));
};

export const loadRoute = async (): Promise<LatLng[]> => {
  const data = await AsyncStorage.getItem(ROUTE_KEY);
  return data ? JSON.parse(data) : [];
};