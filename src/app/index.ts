import { Navigation } from 'react-native-navigation'
import { defaultOptions } from 'navigation/config'
import { NavigationHelpers } from 'navigation/functions'
import { createPrivateProvider, privateScreens } from 'navigation/private'
import {
  createPublicProvider,
  publicScreens,
  publicRoute,
} from 'navigation/public'

import { RootStore } from 'store/rootStore'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)
  const rootStore = new RootStore()

  rootStore.hydrate().then(({}) => {
    Array.from(publicScreens.entries()).forEach(([routes, component]) => {
      Navigation.registerComponent(routes, () =>
        createPublicProvider(component, rootStore)
      )
    })

    Array.from(privateScreens.entries()).forEach(([routes, component]) => {
      Navigation.registerComponent(routes, () =>
        createPrivateProvider(component, rootStore)
      )
    })
    NavigationHelpers.setRoot({ name: publicRoute.example })
  })
})
