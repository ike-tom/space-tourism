import Image from 'next/image'
import { getData } from '../../utils/getData'
import styles from '../../styles/Crew.module.scss'
import Link from 'next/link'
import Layout from '../../components/ui/Layout/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'

function DestinationPage(props: LoadedCrewMemberProps) {
  const { loadedCrewMember } = props

  const router = useRouter()
  const { crewMemberName } = router.query
  const ASTRONAUTS_LIST = [
    'douglas_hurley',
    'mark_shuttleworth',
    'victor_glover',
    'anousheh_ansari',
  ]

  if (!loadedCrewMember) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Space Travel Crew</title>
        <meta
          name="description"
          content="Check out our space crew. They are the best in the business"
        />
      </Head>
      <Layout
        alt="space"
        url="/crew/background-crew.webp"
        chapterNumber="02"
        chapterTitle="Meet your crew"
      >
        <div className={styles.crewMemberImageInfoContainer}>
          <div className={styles.crewMemberImageWrapper}>
            <Image
              src={loadedCrewMember.images.webp}
              alt={loadedCrewMember.name}
              layout="fill"
              objectFit="contain"
              priority
              className={styles.crewMemberImage}
            />
          </div>
          <div className={styles.memberInfoContainer}>
            <h2 className={styles.crewMemberRole}>{loadedCrewMember.role}</h2>
            <h1 className={styles.crewMemberName}>{loadedCrewMember.name}</h1>
            <p className={styles.crewMemberBio}>{loadedCrewMember.bio}</p>
            <div className={styles.characterPickerWrapper}>
              {ASTRONAUTS_LIST.map((astronaut) => {
                return (
                  <Link key={astronaut} href={`/crew/${astronaut}`}>
                    <div
                      className={
                        crewMemberName === `${astronaut}`
                          ? styles.characterPickerActive
                          : styles.characterPicker
                      }
                    ></div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(context: {
  params: { crewMemberName: string }
}) {
  const { params } = context

  const crewMemberName = params.crewMemberName.toString()

  const data = await getData()

  const member = data.crew.find(
    (member: CrewMemberProps) =>
      member.name.toLowerCase().split(' ').join('_') ===
      crewMemberName.toLowerCase().split(' ').join('_'),
  )

  if (!member) {
    return { notFound: true }
  }

  return {
    props: {
      loadedCrewMember: member,
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()

  const members = data.crew.map((member: CrewMemberProps) => member.name)

  const pathsWithParams = members.map((member: string) => ({
    params: { crewMemberName: member.toLowerCase().split(' ').join('_') },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default DestinationPage
