import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './PlanetNavbar.module.scss'

function PlanetNavbar() {
  const router = useRouter()
  const { planetName } = router.query

  const PLANETS_LIST = ['moon', 'mars', 'europa', 'titan']

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {PLANETS_LIST.map((planet) => (
          <li
            key={planet}
            className={
              planetName === `${planet}`
                ? styles.navbarItemActive
                : styles.navbarItem
            }
          >
            <Link href={`/destination/${planet}`}>
              <a className={styles.navbarLink}>{planet}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PlanetNavbar
