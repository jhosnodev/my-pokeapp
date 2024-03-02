import { PokemonDetail } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import {  Header } from "../components";
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
                          } 55px,#5A5A5A 56px,#5A5A5A)`,
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
              <p>Habitat: {pkm.habitat}</p>
              <p>Base happiness: {pkm.base_happiness}</p>
              <p>Weight: {pkm?.weight}Kg</p>
              <p>Height: {pkm?.height}mt</p>
              <p>
                Abilities:{" "}
                {pkm?.abilities.map((ability: any, index: number) => (
                  <span key={index} className={style.abilitiesList}>
                    {ability.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </main>
      {/*       <Footer /> */}
    </>
  );
}
