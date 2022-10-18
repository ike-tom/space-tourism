import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/ui/Navbar/Navbar'
import Background from '../components/ui/Background/Background'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home-Space Travel</title>
        <meta
          name="description"
          content="Last chance to travel to the space! Don't miss it out with our travel agency"
        />
      </Head>
      <Background alt="earth" url="/home/background-home.webp" />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.textButtonContainer}>
          <div className={styles.textWrapper}>
            <h2 className={styles.subHeader}>so, you want to travel to</h2>
            <h1 className={styles.header}>space</h1>
            <p className={styles.description}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.exploreWrapper}>
            <Link href="/destination/moon">
              <a className={styles.exploreHeader}>explore</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
