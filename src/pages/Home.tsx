import { useState } from 'react'
import { Header} from '../components'

export default function Home() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>Home</main>
    {/*   <Footer /> */}
    </>
  )
}
