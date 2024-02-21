import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        {/* input para buscar pkm */}
        <input className={styles.SearchInput} placeholder='Search a pokemon'
        type='text'
        name='search'
        />
    </header>
  )
}
