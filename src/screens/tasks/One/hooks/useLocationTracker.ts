import { useEffect, useState, useRef } from 'react';
import { LatLng } from '../types';
import { loadRoute, saveRoute } from '../storage/routeStorage';
import { startLocationUpdates, stopLocationUpdates } from '../services/locationService';

export const useLocationTracker = () => {
  const [path, setPath] = useState<LatLng[]>([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    loadRoute().then(saved => {
      if (isMountedRef.current) setPath(saved);
    });

    startLocationUpdates(newCoord => {
      setPath(prev => {
        const updated = [...prev, newCoord];
        saveRoute(updated);
        return updated;
      });
    });

    return () => {
      isMountedRef.current = false;
      stopLocationUpdates();
    };
  }, []);

  return { path };
};