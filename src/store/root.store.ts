import { createContext, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { create } from 'mobx-persist'

import { CounterStore } from 'store/counter.store'
import { Navigation } from 'navigation/functions'
import { Routes } from 'navigation/routes'

class RootStore {
  counterStore: CounterStore

  constructor() {
    this.counterStore = new CounterStore()
  }
  login = () => {
    // Here do some auth check to navigate to the right route.
    return Navigation.setRoot({
      name: Routes.Home,
    })
  }

  logout = () => {
    this.counterStore.reset()

    // Navigate the user to the Logged out route.
    return Navigation.setRoot({
      name: Routes.Home,
    })
  }

  hydrateStores = async () => {
    const hydrate = create({ storage: AsyncStorage })

    try {
      await hydrate('CounterStore', this.counterStore)
    } catch (e) {
      console.log('Hydration error: ', e)
    }
  }
}

export const rootStore = new RootStore()
export const RootStoreContext = createContext(rootStore)
export const useRootStore = () => useContext(RootStoreContext)
