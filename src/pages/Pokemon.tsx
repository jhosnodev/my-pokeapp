import { useParams } from "react-router-dom"
import { Footer, Header } from "../components"
import { useState } from "react"

export default function Pokemon() {
  const { name } = useParams()
  console.log(name)
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div>Pokemon (1)</div>
      <Footer />
    </>
  )
}
