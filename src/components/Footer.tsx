import { Link } from "react-router-dom"
import pokeball from '../assets/images/pokeball.png'
import pikachu from '../assets/images/pikachu.png'
import items from '../assets/images/items.png'
import pointer from '../assets/images/pointer.png'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={'/pokemons'} className={styles.footerLink}>
        <img src={pikachu} alt="Pikachu" className={styles.footerIcon} />
        Pokemons
      </Link>
      <Link to={'/items'} className={styles.footerLink}>
        <img src={pokeball} alt="pokeball" className={styles.footerIcon} />
        Items
      </Link>
      <Link to={'/map'} className={styles.footerLink}>
        <img src={pointer} alt="maps" className={styles.footerIcon} />
        Maps
      </Link>
    </footer>
  )
}
