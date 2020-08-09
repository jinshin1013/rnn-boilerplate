import { makeAutoObservable } from 'mobx'

export class CounterStore {
  constructor() {
    makeAutoObservable(this)
  }

  count = 0
  incrementCount = () => {
    this.count += 1
  }
  decrementCount = () => {
    this.count -= 1
  }
  get countDescription() {
    return `The current count is ${this.count}`
  }

  reset = () => {
    this.count = 0
  }
}

export const counterStoreSchema = {
  count: true,
}
