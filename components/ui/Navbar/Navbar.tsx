import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const router = useRouter()

  const checkPath = (path: string) => {
    return router.pathname.includes(path) || router.pathname === null
  }

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const MENU_LIST = [
    { text: 'home', href: '/' },
    { text: 'destination', href: '/destination/moon' },
    { text: 'crew', href: '/crew/douglas_hurley' },
    { text: 'technology', href: '/technology/launch_vehicle' },
  ]

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
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <nav className={isNavOpen ? styles.navbarOpen : styles.navbar}>
        <ul className={styles.navbarList}>
          {MENU_LIST.map((item, index) => (
            <li
              key={index}
              className={
                checkPath(item.text)
                  ? styles.navbarItemActive
                  : styles.navbarItem
              }
            >
              <Link href={item.href}>
                <a className={styles.navbarLink}>
                  <b className={styles.navItemBold}>{`0${index}`}</b>
                  {item.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
