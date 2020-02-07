import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

export class ExampleStore {
  @persist @observable count = 0

  @action.bound
  increment() {
    this.count += 1
  }

  @action.bound
  decrement() {
    this.count -= 1
  }

  @action
  reset() {
    this.count = 0
  }
}
