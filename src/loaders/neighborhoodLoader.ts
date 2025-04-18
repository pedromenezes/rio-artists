import { NeighborhoodFeature, NeighborhoodData } from '../types';
import neighborhoodsData from '../data/limites-administrativos.json';

const sortNeighborhoods = (neighborhoods: NeighborhoodFeature[]) =>
  [...neighborhoods].sort((a, b) =>
    a.attributes.nome.localeCompare(b.attributes.nome)
  );

export const neighborhoodLoader = async (): Promise<NeighborhoodFeature[]> => {
  try {
    const data: NeighborhoodData = neighborhoodsData;
    if (data && data.features) {
      return sortNeighborhoods(data.features);
    } else {
      throw new Error("Invalid data structure in JSON file");
    }
  } catch (e) {
    console.error("Failed to load neighborhood data:", e);
    throw e;
  }
};