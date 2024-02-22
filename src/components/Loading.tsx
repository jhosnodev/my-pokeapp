import styles from './Loading.module.css'
import pokedex from '../assets/images/pokedex.png'

export default function Loading() {
    return (
        <div className={styles.container}>
            <img src={pokedex} alt="Pokedex | Loading screen" className={styles.loadingImg} />
        </div>
    )
}
