import { PokemonDetail } from "../types/types";
import { formatPkmName } from "../utils/utils";
//! Data de un solo pokemon
//* https://pokeapi.co/api/v2/pokemon/${nombre}
const URL = `https://pokeapi.co/api/v2/pokemon`;

export async function fetchPkm(name: string): Promise<PokemonDetail> {
  const response = await fetch(`${URL}/${formatPkmName(name)}`);
  const responseDescription = await fetch(`${URL}-species/${formatPkmName(name)}/`);
  if (!response.ok && responseDescription.ok) {
    throw new Error(response.statusText || responseDescription.statusText);
  }
  const result = await response.json();
  const resultDescription = await responseDescription.json();

  const pokemon = {
    id: String(result.id),
    name: String(result.name),
    imgSrc: String(result.sprites.other["official-artwork"].front_default),
    habitat: String(resultDescription.habitat.name),
    generation: String(resultDescription.generation.name),
    base_happiness: resultDescription.base_happiness,
    stats: result.stats.map((stat: any) => { return { base_stat: stat.base_stat, name: stat.stat.name } }),
    genera: String(resultDescription.genera[7].genus),
    weight: Number(result.weight) / 10,
    height: result.height / 10,
    types: result.types.map((type: any) => type.type),
    abilities: result.abilities.map((ability: any) => ability.ability),
  };
  console.log(pokemon)
  return pokemon;
}
