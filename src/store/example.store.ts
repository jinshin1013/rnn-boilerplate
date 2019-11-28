import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
import { RootStore } from './root.store'

export class ExampleStore {
  @persist @observable count = 0

  @action
  setCount(count: number) {
    this.count = count
  }

  @action
  reset() {
    this.count = 0
  }
}
