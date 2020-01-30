import { Navigation } from 'react-native-navigation'
import { defaultOptions } from 'routes/config/defaultOptions'
import { registerPrivateRoutes, registerPublicRoutes } from 'routes/screens'
import { rootStore } from 'store/root.store'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)
  rootStore.hydrate().then(({}) => {
    registerPublicRoutes(rootStore)
    registerPrivateRoutes(rootStore)

    // Decide whether user is logged in here and choose the next route.
    rootStore.login()
  })
})
