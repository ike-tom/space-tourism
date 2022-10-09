interface LoadedPlanetProps extends PlanetProps {
  loadedPlanet: PlanetProps
}
interface PlanetProps {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}
