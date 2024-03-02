export type Pokemon = {
  id: string;
  name: string;
  imgSrc: string;
  types: Array;
};
export type PokemonTypes = {
  type: string;
};

export type PokemonDetail = {
  id: string,
  genera: string,
  name: string,
  imgSrc: string,
  base_happiness: number,
  habitat: string,
  generation: string,
  weight: number,
  height: number,
  types: PkmTypes[],
  stats: PkmStats[],
  abilities: PkmAbilities[]
}

type PkmTypes = {
  name: string,
  url: string
}
type PkmAbilities = {
  name: string,
  url: string
}
type PkmStats = {
  name: string,
  base_stat: number
}