interface LoadedCrewMemberProps extends CrewMemberProps {
  loadedCrewMember: CrewMemberProps
}
interface CrewMemberProps {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}
