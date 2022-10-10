import Image from 'next/image'
import Background from '../../components/ui/Background/Background'
import { getData } from '../../utils/getData'
import styles from '../../styles/Destination.module.css'
import Navbar from '../../components/ui/Navbar/Navbar'
import PlanetNavbar from '../../components/ui/PlanetNavbar/PlanetNavbar'

function DestinationPage(props: LoadedPlanetProps) {
  const { loadedPlanet } = props

  if (!loadedPlanet) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Background
        alt="space"
        url="/destination/background-destination-desktop.jpg"
      />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.destinationSubheaderWrapper}>
          <h2 className={styles.destinationSubheader}>
            <b className={styles.destinationSubheaderBold}>01</b>
            Pick your destination
          </h2>
        </div>
        <div className={styles.planetImageWrapper}>
          <Image
            src={loadedPlanet.images.webp}
            alt={loadedPlanet.name}
            layout="fill"
          />
        </div>
        <div className={styles.planetInfoWrapper}>
          <PlanetNavbar />
          <h1 className={styles.planetInfoName}>{loadedPlanet.name}</h1>
          <p className={styles.planetInfoDescription}>
            {loadedPlanet.description}
          </p>
          <hr className={styles.line} />
          <div className={styles.averageDistanceWrapper}>
            <h3 className={styles.averageDistanceHeader}>avg. distance</h3>
            <h2 className={styles.averageDistanceInfo}>
              {loadedPlanet.distance}
            </h2>
          </div>
          <div className={styles.averageTravelTimeWrapper}>
            <h3 className={styles.averageTravelTimeHeader}>Est. travel time</h3>
            <h2 className={styles.averageTravelTimeInfo}>
              {loadedPlanet.travel}
            </h2>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context: {
  params: { planetName: string }
}) {
  const { params } = context

  const planetName = params.planetName.toString()

  const data = await getData()

  const planet = data.destinations.find(
    (destination: PlanetProps) =>
      destination.name.toLowerCase() === planetName.toLowerCase(),
  )

  if (!planet) {
    return { notFound: true }
  }

  return {
    props: {
      loadedPlanet: planet,
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()

  const planets = data.destinations.map(
    (destination: PlanetProps) => destination.name,
  )

  const pathsWithParams = planets.map((planet: string) => ({
    params: { planetName: planet.toLowerCase() },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default DestinationPage
