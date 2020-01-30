import { Navigation } from 'react-native-navigation'
import { RootStore } from 'store/root.store'

/**
 * PUBLIC ROUTES
 */
import { Example } from 'routes/public/Example'

/**
 * PRIVATE ROUTES
 */
import { Example2 } from 'routes/private/Example2'

import { PrivateRoutes, PublicRoutes } from './routes'
import { wrapPublicRoutes, wrapPrivateRoutes } from './Provider'

/**
 * Register Public routes
 */
export function registerPublicRoutes(rootStore: RootStore) {
  const publicRoutes = new Map().set(PublicRoutes.Example, Example)

  Array.from(publicRoutes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => wrapPublicRoutes(component, rootStore))
  })
}

/**
 * Register Private routes
 */
export function registerPrivateRoutes(rootStore: RootStore) {
  const privateRoutes = new Map().set(PrivateRoutes.Example2, Example2)

  Array.from(privateRoutes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => wrapPrivateRoutes(component, rootStore))
  })
}
