import { Navigation } from 'react-native-navigation'

import { Routes } from 'navigation/routes'

import { RouteSplash } from 'routes/Splash'
import { RouteHome } from 'routes/Home'

export const registerRoutes = () => {
  const routes = new Map().set(Routes.Splash, RouteSplash).set(Routes.Home, RouteHome)

  Navigation.setLazyComponentRegistrator((componentName) => {
    if (routes.has(componentName)) {
      const routeComponent = routes.get(componentName)
      Navigation.registerComponent(componentName, () => routeComponent)
    }
  })
}
