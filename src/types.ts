// Define the structure for a single coordinate pair
export type Coordinate = number[];

// Define the structure for a ring (an array of coordinates)
export type Ring = Coordinate[];

// Define the geometry structure for a neighborhood
export interface NeighborhoodGeometry {
  rings: Ring[];
}

// Define the attributes structure for a neighborhood
export interface NeighborhoodAttributes {
  objectid: number;
  nome: string;
  regiao_adm: string;
  area_plane: string;
  codbairro: string;
  codra: number;
  codbnum: number;
  link: string;
  rp: string;
  cod_rp: string;
  codbairro_long: number;
  "st_area(shape)": number;
  "st_perimeter(shape)": number;
}

// Define the structure for a single neighborhood feature
export interface NeighborhoodFeature {
  attributes: NeighborhoodAttributes;
  geometry: NeighborhoodGeometry;
}

// Define the structure for the entire neighborhood data source
export interface NeighborhoodData {
  features: NeighborhoodFeature[];
  // Add other top-level properties from the JSON if they exist
}

// Define the structure for an Artist
export interface Artist {
  id: string;
  nome: string;
}

// Define the structure for artists grouped by neighborhood
export interface ArtistsByNeighborhood {
  bairro: string;
  artistas: Artist[];
} 