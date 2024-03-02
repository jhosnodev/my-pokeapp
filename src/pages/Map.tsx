import { useState } from "react"
import { Footer, Header } from "../components"


export default function Map() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>Map</main>
{/*       <Footer /> */}
    </>
  )
}
