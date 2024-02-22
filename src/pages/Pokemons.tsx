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
                <span className={styles.item}>{pkm.id}</span>
                <div className={styles.listItemLabelType}>
                  {pkm.types.map((type: string) =>
                    <span key={pkmTypes[type].id} className={styles.labelType} style={{ backgroundImage: `linear-gradient(105deg,${pkmTypes[type].color} 27px,#5A5A5A 28px,#5A5A5A)` }}>
                      <img src={pkmTypes[type].icon} alt={`${pkmTypes[type].value}`} className={styles.listItemIconType} />
                      {pkmTypes[type].value}
                    </span>)}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </main>
      <Footer />
    </>
  )
}
