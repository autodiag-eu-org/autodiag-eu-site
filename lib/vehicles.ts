import brandsData from "@/data/vehicles/brands.json";
import modelsData from "@/data/vehicles/models.json";
import compatibilityData from "@/data/vehicles/compatibility.json";

export interface Brand {
  name: string;
  modelsCount: number;
}

export interface VehicleFeatures {
  dtcRead: boolean;
  dtcClear: boolean;
  liveData: boolean;
  absEsp: boolean;
}

export interface VehicleCompatibility {
  brand: string;
  model: string;
  yearFrom: number;
  yearTo: number;
  protocol: string;
  pidsSupported: number;
  features: VehicleFeatures;
}

const brands: Brand[] = brandsData;
const models: Record<string, string[]> = modelsData;
const compatibility: VehicleCompatibility[] = compatibilityData;

/**
 * Retourne la liste de toutes les marques avec le nombre de modeles.
 */
export function getBrands(): Brand[] {
  return brands;
}

/**
 * Retourne les modeles disponibles pour une marque donnee.
 */
export function getModelsByBrand(brand: string): string[] {
  return models[brand] ?? [];
}

/**
 * Retourne les informations de compatibilite pour un vehicule specifique.
 * Si l'annee est fournie, filtre les resultats pour cette annee.
 */
export function getCompatibility(
  brand: string,
  model: string,
  year?: number
): VehicleCompatibility[] {
  return compatibility.filter((entry) => {
    const brandMatch = entry.brand.toLowerCase() === brand.toLowerCase();
    const modelMatch = entry.model.toLowerCase() === model.toLowerCase();
    const yearMatch =
      year === undefined || (year >= entry.yearFrom && year <= entry.yearTo);
    return brandMatch && modelMatch && yearMatch;
  });
}

/**
 * Recherche de vehicules par texte libre (marque, modele ou les deux).
 * Retourne les resultats tries par pertinence.
 */
export function searchVehicles(query: string): VehicleCompatibility[] {
  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (terms.length === 0) return [];

  return compatibility
    .map((entry) => {
      const searchable = `${entry.brand} ${entry.model}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (searchable.includes(term)) {
          score += 1;
          if (entry.brand.toLowerCase() === term) score += 2;
          if (entry.model.toLowerCase() === term) score += 2;
          if (entry.brand.toLowerCase().startsWith(term)) score += 1;
          if (entry.model.toLowerCase().startsWith(term)) score += 1;
        }
      }
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);
}
