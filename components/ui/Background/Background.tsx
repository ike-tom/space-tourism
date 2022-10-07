import Image from 'next/image'
import styles from './Background.module.css'

const Background = () => (
  <div className={styles.bgWrap}>
    <Image
      alt="earth"
      src="/background-home-desktop.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
)

export default Background
