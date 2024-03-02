import { PokemonDetail } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import style from "./pokemon.module.css";
import { fetchPkm } from "../api/fetchpokemon";
import genI from '../assets/genI.png'
import { pkmTypes, capitalizeWords } from "../utils/types";
import { capitalizarPrimeraLetra } from "../utils/utils";

export default function Pokemon() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [pkm, setPkm] = useState<PokemonDetail>({
    id: "",
    genera: "",
    name: "",
    imgSrc: "",
    base_happiness: 0,
    habitat: "",
    weight: -1,
    height: -1,
    generation: "",
    types: [],
    abilities: [],
    stats: [],
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

  if (loading || !pkm?.types[0]?.name) return <Loading />;
  // console.log(pkm);
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className={style.mainDetail}>
        <button className={style.goBackBtn} onClick={() => navegate(-1)}>
          {" "}
          ◀{"  "}Go back
        </button>
        <div
          className={style.curved}
          style={{
            background: `${pkmTypes[capitalizeWords(pkm?.types[0]?.name)].color}`
          }}
        ></div>
        <div className={style.cardContainer}>
          <div className={style.cardBody}>
            {/* style={{background:`${pkmTypes[capitalizeWords(pkm.types[0].name)].color}` }} */}
            <img
              src={pkm.imgSrc}
              alt={`${pkm.id} - ${pkm.name}`}
              className={style.cardImg}
            />
            <div className={style.cardInfoContainer}>
              <div className={style.cardHeader}>
                <h2>
                  {pkm?.id}
                  {" "}
                  {capitalizarPrimeraLetra(pkm?.name)}
                </h2>
                <div className={style.typesLabelContainer}>
                  {pkm.types.map((type: any, index: number) => (
                    <a
                      key={index}
                      href={type.url}
                      className={style.typesLabel}
                      style={{
                        backgroundImage: `linear-gradient(105deg,${pkmTypes[capitalizeWords(type.name)].color
                          } 50px,#5A5A5A 49px,#5A5A5A)`,
                      }}
                    >
                      <img
                        src={pkmTypes[capitalizeWords(type.name)].icon}
                        alt={`${pkmTypes[capitalizeWords(type.name)].value}`}
                      />
                      {pkmTypes[capitalizeWords(type.name)].value}
                    </a>
                  ))}
                </div>
                <p>{pkm.genera}</p>
                <p>Generation {" "}{pkm.generation === "generation-i" && <img
                  src={genI}
                  alt={pkm.generation}
                  className={""}
                />}</p>

              </div>
              <h3>Data</h3>
              <div className={style.cardInfoData}>
                <div><p>Habitat</p> <span>{capitalizarPrimeraLetra(pkm.habitat.replace("-", " "))}</span></div>
                <div><p>Happiness</p> <span>{pkm.base_happiness}</span></div>
                <div><p>Weight</p> <span>{pkm?.weight}Kg</span></div>
                <div><p>Height</p> <span>{pkm?.height}m</span></div>
              </div>
              <h3>Base stats</h3>
              <div className={style.cardInfoStats}>
                {pkm.stats.map((stat: any, index: number) =>
                  <div key={index}><p>{stat.name === "hp" ? stat.name.toUpperCase() : capitalizarPrimeraLetra(stat.name.replace("-", " "))}</p><span>{stat.base_stat}</span></div>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>
      {/*       <Footer /> */}
    </>
  );
}
