import { useState } from "react"
import { Header, Footer } from "../components"

export default function Pokemons() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div>Pokemon (All)</div>
      <Footer />
    </>
  )
}
