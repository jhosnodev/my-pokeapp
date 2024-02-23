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
  name: string,
  imgSrc: string,
  weight: number,
  height: number,
  types: PkmTypes[],
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