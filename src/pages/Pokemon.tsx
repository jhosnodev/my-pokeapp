import { PokemonDetail } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { Footer, Header } from "../components";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import style from "./pokemon.module.css";
import { fetchPkm } from "../api/fetchpokemon";
import { pkmTypes, capitalizeWords } from "../utils/types";

export default function Pokemon() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [pkm, setPkm] = useState<PokemonDetail>({
    id: "",
    name: "",
    imgSrc: "",
    weight: -1,
    height: -1,
    types: [],
    abilities: [],
  });
  const navegate = useNavigate();

  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    if (name) {
      const myPkm = async () => {
        const getOnePkm = await fetchPkm(name);
        setPkm({ ...getOnePkm });
        setLoading(false);
      };
      myPkm();
    }
  }, [name]);

  if (loading) return <Loading />;

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className={style.mainDetail}>
        <button className={style.goBackBtn} onClick={() => navegate(-1)}>
          {" "}
          ◀{"  "}Go back
        </button>
        <div>
          <img src={pkm.imgSrc} alt={`${pkm.id} - ${pkm.name}`} />
          <h2>
            {pkm?.id}
            {" - "}
            {pkm?.name}
          </h2>
          <p>Weight: {pkm?.weight}Kg</p>
          <p>Height: {pkm?.height}mt</p>
          <p>
            Abilities:{" "}
            {pkm?.abilities.map((ability: any, index: number) => (
              <a href={ability.url} key={index}>
                {ability.name}
              </a>
            ))}
          </p>
          <p>
            {pkm.types.map((type: any, index: number) => (
              <span
                key={index}
                style={{
                  backgroundImage: `linear-gradient(105deg,${pkmTypes[capitalizeWords(type.name)].color} 27px,#5A5A5A 28px,#5A5A5A)`,
                }}
              >
                <img
                  src={pkmTypes[capitalizeWords(type.name)].icon}
                  alt={`${pkmTypes[capitalizeWords(type.name)].value}`}

                />
                {pkmTypes[capitalizeWords(type.name)].value}
              </span>
            ))}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
