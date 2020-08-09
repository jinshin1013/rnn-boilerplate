import { Navigation } from 'navigation/functions'
import { navigationDefaultOptions } from 'navigation/config/defaultOptions'
import { registerRoutes } from 'navigation/screens'
import { Routes } from 'navigation/routes'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(navigationDefaultOptions)
  registerRoutes()

  Navigation.setRoot({
    name: Routes.Splash,
  })
})
