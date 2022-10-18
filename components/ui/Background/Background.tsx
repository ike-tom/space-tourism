import Image from 'next/image'
import styles from './Background.module.scss'

const Background = (props: { alt: string; url: string }) => (
  <div className={styles.bgWrap}>
    <Image
      alt={props.alt}
      src={props.url}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
)

export default Background
