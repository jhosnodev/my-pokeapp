import { Pokemon } from "../types/types"

import { useEffect, useState } from "react"
import { Header, Footer } from "../components"
import styles from './pokemons.module.css'
import { fetchPkms } from '../api/fetchPokemons'

import { Link } from "react-router-dom"
import { pkmTypes } from "../utils/types"

export default function Pokemons() {
  const [query, setQuery] = useState("")
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const allPkms = async () => {
      const getAllPkms = await fetchPkms()
      setPokemons(getAllPkms)
    }
    allPkms()
  }, [])

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className={styles.pkmList}>
        {pokemons?.slice(0, 151).map((pkm) =>
        (
          <article key={Number(pkm.id)}>
            <Link to={`/pokemons/${pkm.name.toLowerCase()}`} className={styles.listItem}>
              <img src={pkm.imgSrc} alt={`${pkm.id} - ${pkm.name}`} className={styles.listItemIcon} />
              <div className={styles.listItemText}>
                <span>{pkm.name}</span>{" "}
                <span>{pkm.id}</span>
                <span>{pkm.types.map((type: string, index: number) => <span key={index}>
                  {/* <img src={pkmTypes[typ]} alt={`${pkm.id} - ${pkm.name}`} className={styles.listItemIcon} /> */}
                  {type}
                </span>)}</span>
              </div>
            </Link>
          </article>
        ))}
      </main>
      <Footer />
    </>
  )
}
