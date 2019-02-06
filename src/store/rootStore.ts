import { AsyncStorage, Alert } from 'react-native'
import { create } from 'mobx-persist'

import { ExampleStore } from './exampleStore'

export class RootStore {
  exampleStore: ExampleStore

  constructor() {
    this.exampleStore = new ExampleStore(this)
  }

  reset() {
    this.exampleStore.reset()
  }

  async hydrate() {
    const hydrate = create({ storage: AsyncStorage })
    try {
      await hydrate('ExampleStore: ', this.exampleStore)
      return {
        exampleStore: this.exampleStore,
      }
    } catch (e) {
      this.reset()
      Alert.alert('Something went wrong')
      return {
        exampleStore: this.exampleStore,
      }
    }
  }
}
