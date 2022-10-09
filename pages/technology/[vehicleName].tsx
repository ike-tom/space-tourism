import Image from 'next/image'
import Background from '../../components/ui/Background/Background'
import { getData } from '../../utils/getData'
import styles from '../../styles/Vehicle.module.css'
import Navbar from '../../components/ui/Navbar/Navbar'
import Link from 'next/link'

function DestinationPage(props) {
  const { loadedVehicle } = props

  // if (!loadedVehicle) {
  //   return <p>Loading...</p>
  // }

  return (
    <>
      <Background
        alt="space"
        url="/technology/background-technology-desktop.jpg"
      />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.destinationSubheaderWrapper}>
          <h2 className={styles.destinationSubheader}>
            <b className={styles.destinationSubheaderBold}>03</b>
            SPACE LAUNCH 101
          </h2>
        </div>
        <div className={styles.crewMemberImageWrapper}>
          <Image
            src={loadedVehicle.images.portrait}
            alt={loadedVehicle.name}
            layout="fill"
          />
        </div>

        <div className={styles.vehicleInfoWrapper}>
          <p className={styles.vehicleSubheader}>the terminology…</p>
          <h1 className={styles.vehicleName}>{loadedVehicle.name}</h1>
          <p className={styles.vehicleDescription}>
            {loadedVehicle.description}
          </p>
        </div>
        <div className={styles.vehiclePickerWrapper}>
          <Link href="/technology/launch_vehicle">
            <div className={styles.vehiclePicker}>
              <a className={styles.vehicleId}>1</a>
            </div>
          </Link>
          <Link className={styles.vehicleId} href="/technology/spaceport">
            <div className={styles.vehiclePicker}>
              <a className={styles.vehicleId}>2</a>
            </div>
          </Link>
          <Link className={styles.vehicleId} href="/technology/space_capsule">
            <div className={styles.vehiclePicker}>
              <a className={styles.vehicleId}>3</a>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context: {
  params: { vehicleName: string }
}) {
  const { params } = context

  const vehicleName = params.vehicleName.toString()

  const data = await getData()

  const vehicle = data.technology.find(
    (vehicle) =>
      vehicle.name.toLowerCase().split(' ').join('_') ===
      vehicleName.toLowerCase().split(' ').join('_'),
  )

  if (!vehicle) {
    return { notFound: true }
  }

  return {
    props: {
      loadedVehicle: vehicle,
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()

  const vehicles = data.technology.map((vehicle) => vehicle.name)

  const pathsWithParams = vehicles.map((vehicle) => ({
    params: { vehicleName: vehicle.toLowerCase().split(' ').join('_') },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default DestinationPage
