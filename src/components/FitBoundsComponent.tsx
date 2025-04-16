import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { NeighborhoodFeature, Ring, Coordinate } from '../types';

interface FitBoundsProps {
  allNeighborhoods: NeighborhoodFeature[];
}

function FitBoundsComponent({ allNeighborhoods }: FitBoundsProps) {
  const map = useMap();

  const initialBounds = (() => {
    if (!allNeighborhoods || allNeighborhoods.length === 0) {
      return null;
    }
    let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
    allNeighborhoods.forEach(feature => {
      feature.geometry.rings.forEach((ring: Ring) => {
        ring.forEach((coord: Coordinate) => {
          const lon = coord[0];
          const lat = coord[1];
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
        });
      });
    });
    if (minLat <= 90 && maxLat >= -90 && minLon <= 180 && maxLon >= -180) {
      return L.latLngBounds([minLat, minLon], [maxLat, maxLon]);
    }
    return null;
  })();

  useEffect(() => {
    if (map && initialBounds && initialBounds.isValid()) {
      // Adjust bounds to shift view rightwards
      const sw = initialBounds.getSouthWest();
      const ne = initialBounds.getNorthEast();
      const lonDiff = ne.lng - sw.lng;
      const adjustedNELng = ne.lng + lonDiff * 0.25; // Extend eastern edge by 20% of width

      const adjustedBounds = L.latLngBounds(
        [sw.lat, sw.lng],
        [ne.lat, adjustedNELng]
      );

      // Check if map bounds are already set (e.g., by initial map options)
      // to avoid unnecessary zoom on potential re-renders
      // Compare against the *original* bounds
      if (!map.getBounds().equals(initialBounds, 0.01)) {
          map.fitBounds(adjustedBounds, { padding: [20, 20] });
      }
    }
  }, [map, initialBounds]); 

  return null;
}

export default FitBoundsComponent; 