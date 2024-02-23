import { PokemonDetail } from "../types/types";
import { formatPkmName } from "../utils/utils";
//! Data de un solo pokemon
//* https://pokeapi.co/api/v2/pokemon/${nombre}
const URL = `https://pokeapi.co/api/v2/pokemon`

export async function fetchPkm(name: string): Promise<PokemonDetail> {
    const response = await fetch(`${URL}/${formatPkmName(name)}`)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const result = await response.json()
    const pokemon = {
        id: String(result.id),
        name: String(result.name),
        imgSrc: String(result.sprites.front_default),
        weight: Number(result.weight),
        height: Number(result.height),
        types: result.types.map((type: any) => type.type),
        abilities: result.abilities.map((ability: any) => ability.ability)
    }

    return pokemon

}