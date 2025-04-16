import { useState, useMemo, useCallback, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Layout, notification } from 'antd';
import { Map } from 'leaflet';

import MapDisplay from './components/MapDisplay';
import NeighborhoodSidebar from './components/NeighborhoodSidebar';
import SpotifyPlayer from './components/SpotifyPlayer';
import { NeighborhoodFeature } from './types';

import 'antd/dist/reset.css';
import 'leaflet/dist/leaflet.css';
import './App.css';
import './components/NeighborhoodSidebar.css';

const { Content } = Layout;

function App() {
  const mapRef = useRef<Map>(null);
  const initialNeighborhoodData = useLoaderData() as NeighborhoodFeature[];
  const neighborhoodData = initialNeighborhoodData;
  const [api, contextHolder] = notification.useNotification();

  const allNeighborhoods = useMemo(() => neighborhoodData, [neighborhoodData]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [highlightedNeighborhood, setHighlightedNeighborhood] = useState<string | null>(null);
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

  const autoCompleteOptions = useMemo(() =>
      allNeighborhoods.map(feature => ({ value: feature.attributes.nome }))
  , [allNeighborhoods]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    if (selectedNeighborhood && value !== selectedNeighborhood) {
      setSelectedNeighborhood(null);
    }
    setHighlightedNeighborhood(null);
  }, [selectedNeighborhood]);

  const handleSelectNeighborhood = useCallback((value: string) => {
    setSearchTerm(value);
    setSelectedNeighborhood(value);
    setHighlightedNeighborhood(null);
  }, []);

  const handleHighlightChange = useCallback((value: string | null) => {
    setHighlightedNeighborhood(value);
  }, []);

  const handleMapHighlightChange = useCallback((value: string | null) => {
    setHighlightedNeighborhood(value);
  }, []);

  const handleSelectArtist = useCallback((artistId: string, artistName: string) => {
    api.info({
      message: `Selected Artist: ${artistName}`,
      placement: 'bottom',
    });
    setSelectedArtistId(artistId);
  }, [api]);

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
        />
        <NeighborhoodSidebar
            autoCompleteOptions={autoCompleteOptions}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSelectNeighborhood={handleSelectNeighborhood}
            onHighlight={handleHighlightChange}
        />
        {selectedArtistId && <SpotifyPlayer artistId={selectedArtistId} />}
      </Content>
    </Layout>
  );
}

export default App;