import Link from 'next/link'
import styles from './PlanetNavbar.module.css'

function PlanetNavbar() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/destination/moon">moon</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/destination/mars">mars</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/destination/europa">europa</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/destination/titan">titan</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PlanetNavbar
