import { useParams } from "react-router-dom"

export default function Pokemon() {
  const {name} = useParams()
  console.log(name)
  return (
    <div>Pokemon</div>
  )
}
