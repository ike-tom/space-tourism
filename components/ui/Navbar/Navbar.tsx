import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.logo}
        src="/shared/logo.svg"
        alt="logo"
        width={48}
        height={48}
      />
      <hr className={styles.line} />
      <nav className={styles.navbar}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>
                <b>00</b> home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/destination/moon">
              <a>
                <b>01</b> destination
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/crew/douglas_hurley">
              <a>
                <b>02</b> crew
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/technology/launch_vehicle">
              <a>
                <b>03</b> technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
