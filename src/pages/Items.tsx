import { useState } from "react"
import { Footer, Header } from "../components"


export default function Items() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>Items</main>
      <Footer />
    </>
  )
}
