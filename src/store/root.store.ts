import { createContext } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { create } from 'mobx-persist'
import { NavigationHelpers } from 'routes/functions'
import { PublicRoutes } from 'routes/routes'

import { ExampleStore } from './example.store'

export class RootStore {
  exampleStore: ExampleStore

  constructor() {
    this.exampleStore = new ExampleStore()
  }

  login = () => {
    // Do app set up stuff here and navigate to logged in screen.
    NavigationHelpers.setRoot({ name: PublicRoutes.Example })
  }

  logout = () => {
    // Do app clean up stuff here and navigate to logged out screen.
    NavigationHelpers.setRoot({ name: PublicRoutes.Example })
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
