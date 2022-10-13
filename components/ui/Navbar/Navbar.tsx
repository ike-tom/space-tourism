import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  //after clicking on the hamburger menu, the nav will open
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          src="/shared/logo.svg"
          alt="logo"
          layout="fill"
        />
      </div>
      <hr className={styles.line} />
      <button
        onClick={handleNavOpen}
        className={isNavOpen ? styles.hamburgerActive : styles.hamburger}
      >
        <span className={styles.hamburger__box}>
          <span className={styles.hamburger__inner}></span>
        </span>
      </button>

      <nav className={isNavOpen ? styles.navbarOpen : styles.navbar}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>
                <b className={styles.navItemBold}>00</b> home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/destination/moon">
              <a>
                <b className={styles.navItemBold}>01</b> destination
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/crew/douglas_hurley">
              <a>
                <b className={styles.navItemBold}>02</b> crew
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/technology/launch_vehicle">
              <a>
                <b className={styles.navItemBold}>03</b> technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
