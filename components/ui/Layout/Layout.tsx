import Background from '../Background/Background'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

function Layout({
  children,
  url,
  alt,
  chapterNumber,
  chapterTitle,
}: LayoutProps) {
  return (
    <>
      <Background alt={alt} url={url} />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.destinationSubheaderWrapper}>
          <h2 className={styles.destinationSubheader}>
            <b className={styles.destinationSubheaderBold}>{chapterNumber}</b>
            {chapterTitle}
          </h2>
        </div>
        {children}
      </main>
    </>
  )
}

export default Layout
