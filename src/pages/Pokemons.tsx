import { Pokemon } from "../types/types";

import { useEffect, useState } from "react";
import { Header } from "../components";
import styles from "./pokemons.module.css";
import { fetchPkms } from "../api/fetchPokemons";

import { Link } from "react-router-dom";
import { pkmTypes } from "../utils/types";
import Loading from "../components/Loading";

export default function Pokemons() {
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setloading(true);
    const allPkms = async () => {
      const getAllPkms = await fetchPkms();
      setPokemons(getAllPkms);
      setloading(false);
    };
    allPkms();
  }, []);
  if (loading || !pokemons) return <Loading />;

  const filteredPkms = pokemons.filter((pkm) => {
    return pkm.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className={styles.pkmList}>
        {filteredPkms?.map((pkm) => (
          <article key={Number(pkm.id)}>
            <Link
              to={`/pokemons/${pkm.name.toLowerCase()}`}
              className={styles.listItem}
            >
              <img
                src={pkm.imgSrc}
                alt={`${pkm.id} - ${pkm.name}`}
                className={styles.listItemIcon}
              />
              <div className={styles.listItemText}>
                <h4>{pkm.name}</h4> <p className={styles.item}>{pkm.id}</p>
                <div className={styles.listItemLabelType}>
                  {pkm.types.map((type: string) => (
                    <span
                      key={pkmTypes[type].id}
                      className={styles.labelType}
                      style={{
                        backgroundImage: `linear-gradient(105deg,${pkmTypes[type].color} 27px,#5A5A5A 28px,#5A5A5A)`,
                      }}
                    >
                      <img
                        src={pkmTypes[type].icon}
                        alt={`${pkmTypes[type].value}`}
                        className={styles.listItemIconType}
                      />
                      {pkmTypes[type].value}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </main>
{/*       <Footer /> */}
    </>
  );
}
