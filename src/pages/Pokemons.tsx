import { useEffect, useState } from "react"
import { Header, Footer } from "../components"
import styles from './pokemons.module.css'
import { fetchPkms } from '../api/fetchPomemons'
import { Pokemon } from "../types/types"

import { Link } from "react-router-dom"

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
      <main>
        {pokemons?.slice(0, 151).map((pkm) =>
        (
          <article key={Number(pkm.id)}>
            <Link to={`/${pkm}`} className={styles.listItem}>
              <img src={pkm.imgSrc} alt="001 - Bulbasaur" className={styles.listItemIcon} />
              <div className={styles.listItemText}>
                <span>{pkm.name}</span>{" "}
                <span>{pkm.id}</span>
              </div>
            </Link>
          </article>

        ))}

      </main>
      <Footer />
    </>
  )
}
