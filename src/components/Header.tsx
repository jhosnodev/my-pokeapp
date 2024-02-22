import styles from './Header.module.css'
import { Link } from 'react-router-dom';

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Header({ query, setQuery }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h2>
          Pokemons
        </h2>
      </Link>
      <input
        className={styles.SearchInput}
        value={query}
        placeholder="Search Pokemon"
        onChange={(event) => setQuery(event.target.value.trim())}
        type="text"
      />
    </header>
  )
}
