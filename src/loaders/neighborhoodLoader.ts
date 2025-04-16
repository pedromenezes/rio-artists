import { NeighborhoodFeature, NeighborhoodData } from '../types';

const NEIGHBORHOODS_URL = 'https://pgeo3.rio.rj.gov.br/arcgis/rest/services/Cartografia/Limites_administrativos/MapServer/4/query?where=1%3D1&outFields=*&outSR=4326&f=json';

const sortNeighborhoods = (neighborhoods: NeighborhoodFeature[]) =>
  [...neighborhoods].sort((a, b) =>
    a.attributes.nome.localeCompare(b.attributes.nome)
  );

export const neighborhoodLoader = async (): Promise<NeighborhoodFeature[]> => {
  try {
    const response = await fetch(NEIGHBORHOODS_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: NeighborhoodData = await response.json();
    if (data && data.features) {
      return sortNeighborhoods(data.features);
    } else {
      throw new Error("Invalid data structure received from API");
    }
  } catch (e) {
    console.error("Failed to fetch neighborhood data:", e);
    throw e;
  }
};