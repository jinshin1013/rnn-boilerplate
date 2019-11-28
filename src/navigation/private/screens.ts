import { Navigation } from 'react-native-navigation'
import { RootStore } from 'store/rootStore'
import { privateRoutes } from './routes'
import { createPrivateProvider } from './provider'

export function registerPrivateScreens(rootStore: RootStore) {
  const privateScreens = new Map()

  Array.from(privateScreens).forEach(([route, component]) => {
    Navigation.registerComponent(route, () => createPrivateProvider(component, rootStore))
  })
}
