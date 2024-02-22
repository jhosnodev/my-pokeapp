//! Traer todos los pokms de la 1ra gen
const URL = "https://unpkg.com/pokemons@1.1/pokemons.json"

export async function fetchPkms() {
    const response = await fetch(URL)
    if (!response.ok) {
        throw new Error("Failed to fecth pokemons")
    }
    const result = await response.json()
    console.log(result)

    const pokemons = result.map((pkm: any) => ({
        name: pkm.name,
        id: pkm.national_number,
        imgSrc: `http://img.pokemondb.net/sprites/black-white/anim/normal/${pkm.name}.gif`
    }))

    const uniquePkms = pokemons.filter((pkm: any, index: number) =>
        pokemons.findIndex((other: any) => other.id === pkm.id) === index
    )
    return uniquePkms
}