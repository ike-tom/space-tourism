import Image from 'next/image'
import { getData } from '../../utils/getData'
import styles from '../../styles/Vehicle.module.scss'
import Link from 'next/link'
import Layout from '../../components/ui/Layout/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'

function DestinationPage(props: LoadedVehicleProps) {
  const { loadedVehicle } = props

  const router = useRouter()
  const { vehicleName } = router.query
  const VEHICLES_LIST = ['launch_vehicle', 'spaceport', 'space_capsule']

  if (!loadedVehicle) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Space Travel Vehicles</title>
        <meta
          name="description"
          content="We are professionalists. Let's face it. The safest vehicles in the universe"
        />
      </Head>
      <Layout
        alt="space"
        url="/technology/background-technology.webp"
        chapterNumber="03"
        chapterTitle="space launch 101"
      >
        <div className={styles.crewMemberImageInfoContainer}>
          <div className={styles.crewMemberImageWrapper}>
            <Image
              src={loadedVehicle.images.portrait}
              alt={loadedVehicle.name}
              layout="fill"
              priority
              objectFit="cover"
              objectPosition="bottom"
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
            {VEHICLES_LIST.map((vehicle, index) => {
              return (
                <Link key={vehicle} href={`/technology/${vehicle}`}>
                  <div
                    className={
                      vehicleName === `${vehicle}`
                        ? styles.vehiclePickerActive
                        : styles.vehiclePicker
                    }
                  >
                    <a
                      className={
                        vehicleName === `${vehicle}`
                          ? styles.vehicleIdActive
                          : styles.vehicleId
                      }
                    >
                      {index + 1}
                    </a>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
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
    (vehicle: VehicleProps) =>
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

  const vehicles = data.technology.map((vehicle: VehicleProps) => vehicle.name)

  const pathsWithParams = vehicles.map((vehicle: string) => ({
    params: { vehicleName: vehicle.toLowerCase().split(' ').join('_') },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default DestinationPage
