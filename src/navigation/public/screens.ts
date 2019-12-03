import { Navigation } from 'react-native-navigation'
import { RootStore } from 'store/root.store'
import { publicRoute } from './routes'
import { createPublicProvider } from './provider'

export function registerPublicScreens(rootStore: RootStore) {
  const publicScreens = new Map()
  publicScreens.set(publicRoute.example, require('flows/Example').Example)
  publicScreens.set(publicRoute.example2, require('flows/Example2').Example2)

  Array.from(publicScreens).forEach(([route, component]) => {
    Navigation.registerComponent(route, () => createPublicProvider(component, rootStore))
  })
}