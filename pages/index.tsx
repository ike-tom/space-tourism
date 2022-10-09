import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/ui/Navbar/Navbar'
import Background from '../components/ui/Background/Background'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Background alt="earth" url="/home/background-home-desktop.jpg" />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.textWrapper}>
          <h2 className={styles.subHeader}>so, you want to travel to</h2>
          <h1 className={styles.header}>space</h1>
          <p className={styles.description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.exploreWrapper}>
          <Link href="/destination/moon">
            <a className={styles.exploreHeader}>explore</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
