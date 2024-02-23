import { useState } from "react"
import { Footer, Header } from "../components"


export default function Type() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>Type</main>
      <Footer />
    </>
  )
}
