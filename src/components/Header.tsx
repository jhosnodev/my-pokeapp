import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import pokeicon from "../assets/images/pokeicon.png";

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Header({ query, setQuery }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h2 className={styles.brand}>
          <img src={pokeicon} alt="Pokemon" className={styles.pokeicon} />{" "}
          <span className={styles.brandSm}>Pokemons</span>
        </h2>
      </Link>
      {pathname.includes("/pokemons") ? (
        <input
          className={styles.SearchInput}
          value={query}
          placeholder="Search Pokemon"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
        />
      ) : null}
    </header>
  );
}
