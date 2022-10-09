import Image from 'next/image'
import Background from '../../components/ui/Background/Background'
import { getData } from '../../utils/getData'
import styles from '../../styles/Crew.module.css'
import Navbar from '../../components/ui/Navbar/Navbar'
import Link from 'next/link'

function DestinationPage(props: LoadedCrewMemberProps) {
  const { loadedCrewMember } = props

  // if (!loadedCrewMember) {
  //   return <p>Loading...</p>
  // }

  return (
    <>
      <Background alt="space" url="/crew/background-crew-desktop.jpg" />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.destinationSubheaderWrapper}>
          <h2 className={styles.destinationSubheader}>
            <b className={styles.destinationSubheaderBold}>02</b>
            Meet your crew
          </h2>
        </div>
        <div className={styles.crewMemberImageWrapper}>
          <Image
            src={loadedCrewMember.images.webp}
            alt={loadedCrewMember.name}
            layout="fill"
          />
        </div>

        <h2 className={styles.crewMemberRole}>{loadedCrewMember.role}</h2>
        <h1 className={styles.crewMemberName}>{loadedCrewMember.name}</h1>
        <p className={styles.crewMemberBio}>{loadedCrewMember.bio}</p>

        <div className={styles.characterPickerWrapper}>
          <Link href="/crew/douglas_hurley">
            <div className={styles.characterPicker}></div>
          </Link>
          <Link href="/crew/mark_shuttleworth">
            <div className={styles.characterPicker}></div>
          </Link>
          <Link href="/crew/victor_glover">
            <div className={styles.characterPicker}></div>
          </Link>
          <Link href="/crew/anousheh_ansari">
            <div className={styles.characterPicker}></div>
          </Link>
        </div>
      </main>
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
