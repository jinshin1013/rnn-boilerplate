import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
import { RootStore } from './rootStore'

type CurrentScreenName = 'Example 1' | 'Example 2'

export class ExampleStore {
  constructor(private rootStore: RootStore) {}

  @persist @observable currentScreenName: CurrentScreenName = 'Example 1'

  @action
  setCurrentScreenName(name: CurrentScreenName) {
    this.currentScreenName = name
  }

  @action
  reset() {
    this.currentScreenName = 'Example 1'
  }
}
