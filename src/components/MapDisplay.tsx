import React, { MutableRefObject } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import { Map, LatLngExpression } from 'leaflet';
import { Typography, List, Button, Empty } from 'antd';
import { NeighborhoodFeature, Artist, Coordinate, Ring } from '../types';
import FitBoundsComponent from './FitBoundsComponent';
import { artistsByNeighborhood } from '../data/artistsByNeighborhood';

interface MapDisplayProps {
    mapRef: MutableRefObject<Map | null>;
    center?: LatLngExpression;
    zoom?: number;
    neighborhoods: NeighborhoodFeature[];
    selectedNeighborhood: string | null;
    highlightedNeighborhood: string | null;
    onMapHighlightChange: (value: string | null) => void;
    onSelectArtist: (artistId: string, artistName: string) => void;
}

const MapDisplay: React.FC<MapDisplayProps> = ({
    mapRef,
    neighborhoods,
    selectedNeighborhood,
    highlightedNeighborhood,
    onMapHighlightChange,
    onSelectArtist,
}) => {
    const artistCountMap: { [key: string]: number } = (() => {
      const counts: { [key: string]: number } = {};
      artistsByNeighborhood.forEach(item => {
        counts[item.bairro] = item.artistas.length;
      });
      return counts;
    })();

    const artistsMap: { [key: string]: Artist[] } = (() => {
        const map: { [key: string]: Artist[] } = {};
        artistsByNeighborhood.forEach(item => {
            map[item.bairro] = item.artistas;
        });
        return map;
    })();

    return (
        <MapContainer
            ref={mapRef}
            center={[-23.0, -44.00]}
            zoom={10}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
             {neighborhoods.map((feature, index) => {
                const positions = feature.geometry.rings.map((ring: Ring) =>
                  ring.map((coord: Coordinate) => [coord[1], coord[0]] as LatLngExpression)
                );
                const name = feature.attributes.nome;
                const isSelected = name === selectedNeighborhood;
                const isHighlighted = name === highlightedNeighborhood;
                const artistCount = artistCountMap[name] || 0;
                const artists = artistsMap[name] || [];

                const baseOpacity = artistCount === 0
                                     ? 0
                                     : 0.2 + Math.min(artistCount, 4) * 0.125;

                let style = {
                  color: 'blue',
                  weight: 1,
                  fillOpacity: baseOpacity
                };

                if (isHighlighted) {
                  style = {
                    color: '#FFA500',
                    weight: 2,
                    fillOpacity: 0.4
                  };
                }

                if (isSelected) {
                  style = {
                    color: '#FFFF00',
                    weight: 2,
                    fillOpacity: 0.6
                  };
                }

                return (
                  <Polygon
                    key={`${name}-${index}`}
                    pathOptions={style}
                    positions={positions}
                    eventHandlers={{
                        mouseover: () => onMapHighlightChange(name),
                        mouseout: () => onMapHighlightChange(null)
                    }}
                  >
                    <Tooltip>{name}</Tooltip>
                    <Popup>
                      <div style={{ minWidth: '150px' }}>
                        <Typography.Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                          {name}
                        </Typography.Title>
                        {artists.length > 0 ? (
                          <List
                            size="small"
                            dataSource={
                              [...artists].sort((a, b) => a.nome.localeCompare(b.nome))
                            }
                            renderItem={(artist) => (
                              <List.Item style={{ padding: 0, border: 'none' }}>
                                <Button
                                  type="link"
                                  size="small"
                                  onClick={() => onSelectArtist(artist.id, artist.nome)}
                                  style={{
                                    padding: '2px 6px',
                                    height: 'auto',
                                    lineHeight: 'inherit',
                                    border: '1px solid #eee',
                                    borderRadius: '4px',
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '4px'
                                  }}
                                >
                                  {artist.nome}
                                </Button>
                              </List.Item>
                            )}
                          />
                        ) : (
                          <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description="No artists found"
                            style={{ padding: '0', margin: '8px 0 0' }}
                          />
                        )}
                      </div>
                    </Popup>
                  </Polygon>
                );
            })}
            <FitBoundsComponent allNeighborhoods={neighborhoods} />
        </MapContainer>
    );
};

export default MapDisplay;
