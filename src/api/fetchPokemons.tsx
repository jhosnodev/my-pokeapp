import { Pokemon } from "../types/types";
//! Traer todos los pokms de la 1ra gen
import { formatPkmName } from "../utils/utils";
const URL = "https://unpkg.com/pokemons@1.1/pokemons.json";

export async function fetchPkms(): Promise<Pokemon[]> {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const results = await response.json();

  const pokemons = results.results.map((pkm: any) => ({
    id: pkm.national_number,
    name: pkm.name,
    types: pkm.type,
    imgSrc: `http://img.pokemondb.net/sprites/black-white/anim/normal/${formatPkmName(
      pkm.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePkms = pokemons.filter(
    (pkm: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pkm.id) === index
  );
  // console.log("results", uniquePkms)
  return uniquePkms.slice(0, 151);
}
