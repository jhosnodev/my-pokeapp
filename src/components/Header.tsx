import styles from './Header.module.css'

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Header({ query, setQuery }: HeaderProps) {
  return (
    <header className={styles.header}>
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
