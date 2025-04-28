import { useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Layout, notification } from 'antd';
import { Map } from 'leaflet';

import MapDisplay from './components/MapDisplay';
import NeighborhoodSidebar from './components/NeighborhoodSidebar';
import SpotifyPlayer from './components/SpotifyPlayer';
import { NeighborhoodFeature } from './types';

const { Content } = Layout;

function App() {
  const mapRef = useRef<Map>(null);
  const initialNeighborhoodData = useLoaderData() as NeighborhoodFeature[];
  const neighborhoodData = initialNeighborhoodData;
  const [api, contextHolder] = notification.useNotification();

  const allNeighborhoods = neighborhoodData;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [highlightedNeighborhood, setHighlightedNeighborhood] = useState<string | null>(null);
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

  const autoCompleteOptions = allNeighborhoods.map(feature => ({ value: feature.attributes.nome }));

  const clearHighlight = () => {
    setHighlightedNeighborhood(null);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (selectedNeighborhood && value !== selectedNeighborhood) {
      setSelectedNeighborhood(null);
    }
    clearHighlight();
  };

  const handleSelectNeighborhood = (value: string) => {
    setSearchTerm(value);
    setSelectedNeighborhood(value);
    clearHighlight();
  };

  const handleHighlightChange = (value: string | null) => {
    setHighlightedNeighborhood(value);
  };

  const handleMapHighlightChange = (value: string | null) => {
    setHighlightedNeighborhood(value);
  };

  const handleSelectArtist = (artistId: string, artistName: string) => {
    api.info({
      message: `Selected Artist: ${artistName}`,
      placement: 'bottom',
    });
    setSelectedArtistId(artistId);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {contextHolder}
      <Content>
        <MapDisplay
            mapRef={mapRef}
            neighborhoods={allNeighborhoods}
            selectedNeighborhood={selectedNeighborhood}
            highlightedNeighborhood={highlightedNeighborhood}
            onMapHighlightChange={handleMapHighlightChange}
            onSelectArtist={handleSelectArtist}
            clearHighlight={clearHighlight}
        />
        <NeighborhoodSidebar
            autoCompleteOptions={autoCompleteOptions}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSelectNeighborhood={handleSelectNeighborhood}
            onHighlight={handleHighlightChange}
            clearHighlight={clearHighlight}
        />
        {selectedArtistId && <SpotifyPlayer artistId={selectedArtistId} />}
      </Content>
    </Layout>
  );
}

export default App;