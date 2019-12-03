import { createContext } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { create } from 'mobx-persist'

import { ExampleStore } from './example.store'
import { NavigationHelpers } from 'navigation/functions'
import { publicRoute } from 'navigation/public/routes'

export class RootStore {
  exampleStore: ExampleStore

  constructor() {
    this.exampleStore = new ExampleStore()
  }

  login = () => {
    // Do app set up stuff here and navigate to logged in screen.
    NavigationHelpers.setRoot({ name: publicRoute.example })
  }

  logout = () => {
    // Do app clean up stuff here and navigate to logged out screen.
    NavigationHelpers.setRoot({ name: publicRoute.example })
  }

  /**
   * Hydrate all persistent stores.
   */
  async hydrate() {
    const hydrate = create({ storage: AsyncStorage })
    try {
      await hydrate('ExampleStore: ', this.exampleStore)
      return {
        exampleStore: this.exampleStore,
      }
    } catch (e) {
      this.logout()
      Alert.alert('Something went wrong')
      return {
        exampleStore: this.exampleStore,
      }
    }
  }
}

export const rootStore = new RootStore()
export const RootStoreContext = createContext(rootStore)