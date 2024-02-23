import { PokemonDetail } from "../types/types"
import { useNavigate, useParams } from "react-router-dom"
import { Footer, Header } from "../components"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import style from './pokemon.module.css'
import { fetchPkm } from "../api/fetchpokemon"

export default function Pokemon() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [pkm, setPkm] = useState<PokemonDetail>({
    id: "",
    name: "",
    imgSrc: "",
    weight: -1,
    height: -1,
    types: [],
    abilities: []
  })
  const navegate = useNavigate()

  const { name } = useParams()


  useEffect(() => {
    setLoading(false)
    if (name) {
      const myPkm = async () => {
        const getOnePkm = await fetchPkm(name)
        setPkm({ ...getOnePkm })
        console.log(getOnePkm)
        setLoading(false)
      }
      myPkm()
    }
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className={style.mainDetail}>
        <button className={style.goBackBtn} onClick={() => navegate(-1)}> ◀{"  "}Go back</button>
        <div>
          <h2>{pkm.name}</h2>

        </div>
      </main>
      <Footer />
    </>
  )
}
