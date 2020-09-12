import { observable, action, computed, makeObservable } from 'mobx'
import { persist } from 'mobx-persist'

export class CounterStore {
  constructor() {
    makeObservable(this)
  }

  @persist @observable count = 0

  @action.bound
  incrementCount() {
    this.count += 1
  }

  @action.bound
  decrementCount() {
    this.count -= 1
  }

  @computed
  get countDescription() {
    return `The current count is ${this.count}`
  }

  @action.bound
  reset() {
    this.count = 0
  }
}
