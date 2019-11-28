import { Navigation } from 'react-native-navigation'
import { defaultOptions } from 'navigation/config/defaultOptions'

import { registerPublicScreens } from 'navigation/public/screens'
import { registerPrivateScreens } from 'navigation/private/screens'

import { rootStore } from 'store/root.store'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)
  rootStore.hydrate().then(({}) => {
    registerPublicScreens(rootStore)
    registerPrivateScreens(rootStore)

    // Decide whether user is logged in here and choose the next route.
    rootStore.login()
  })
})
