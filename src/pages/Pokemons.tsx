import { useState } from "react"
import { Header, Footer } from "../components"
import styles from './pokemons.module.css'

import Bulbasaur from '../assets/images/bulbasaur.gif'
import { Link } from "react-router-dom"

export default function Pokemons() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>Pokemon (All)
        <article className="">
          <Link to='/' className={styles.listItem}>
            <img src={Bulbasaur} alt="001 - Bulbasaur" className={styles.listItemIcon} />
            <div className={styles.listItemText}>
              <span>Bulbasaur</span>{" "}
              <span>001</span>
            </div>
          </Link>
        </article>

      </main>
      <Footer />
    </>
  )
}
