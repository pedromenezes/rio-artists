import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'antd/dist/reset.css';
import { Layout, notification } from 'antd';
import MapDisplay from './components/MapDisplay';
import NeighborhoodSidebar from './components/NeighborhoodSidebar';
import SpotifyPlayer from './components/SpotifyPlayer';
import './components/NeighborhoodSidebar.css';
import { NeighborhoodFeature, NeighborhoodData } from './types';
import { Map } from 'leaflet';

const { Content } = Layout;

const sortNeighborhoods = (neighborhoods: NeighborhoodFeature[]) =>
  [...neighborhoods].sort((a, b) =>
    a.attributes.nome.localeCompare(b.attributes.nome)
  );

const NEIGHBORHOODS_URL = 'https://pgeo3.rio.rj.gov.br/arcgis/rest/services/Cartografia/Limites_administrativos/MapServer/4/query?where=1%3D1&outFields=*&outSR=4326&f=json';

function App() {
  const mapRef = useRef<Map>(null);
  const [neighborhoodData, setNeighborhoodData] = useState<NeighborhoodFeature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(NEIGHBORHOODS_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NeighborhoodData = await response.json();
        if (data && data.features) {
          setNeighborhoodData(sortNeighborhoods(data.features));
        } else {
            throw new Error("Invalid data structure received from API");
        }
      } catch (e) {
        console.error("Failed to fetch neighborhood data:", e);
        const errorMessage = e instanceof Error ? e.message : String(e);
        setError(errorMessage);
         api.error({
          message: 'Failed to load neighborhood data',
          description: errorMessage,
          placement: 'top',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api]);

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

  if (isLoading) {
    return <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading neighborhood data...</Layout>;
  }

  if (error) {
    return <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Error loading data: {error}</Layout>;
  }

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