interface LoadedVehicleProps extends VehicleProps {
  loadedVehicle: VehicleProps
}
interface VehicleProps {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}
