import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { NeighborhoodFeature, Ring, Coordinate } from '../types';

interface FitBoundsProps {
  allNeighborhoods: NeighborhoodFeature[];
  selectedNeighborhood: string | null;
}

function FitBoundsComponent({ allNeighborhoods, selectedNeighborhood }: FitBoundsProps) {
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

  // Run only once at component mount
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
  }, []);

  // Effect to zoom to selected neighborhood
  useEffect(() => {
    if (!map || !selectedNeighborhood || !allNeighborhoods) return;
    
    const neighborhood = allNeighborhoods.find(n => 
      n.attributes.nome === selectedNeighborhood
    );
    
    if (neighborhood) {
      // Calculate bounds for this specific neighborhood
      let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
      
      neighborhood.geometry.rings.forEach((ring: Ring) => {
        ring.forEach((coord: Coordinate) => {
          const lon = coord[0];
          const lat = coord[1];
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
        });
      });
      
      if (minLat <= 90 && maxLat >= -90 && minLon <= 180 && maxLon >= -180) {
        const bounds = L.latLngBounds([minLat, minLon], [maxLat, maxLon]);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [selectedNeighborhood, map, allNeighborhoods]);

  return null;
}

export default FitBoundsComponent; 