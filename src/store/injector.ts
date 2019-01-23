import { inject, observer, IReactComponent } from 'mobx-react'
import { RootStore } from './rootStore'

export function storeInjector(additionalStores: object = {}) {
  return <P extends IReactComponent>(wrappedComponent: P) =>
    inject(
      ({ rootStore }: { rootStore: RootStore }, props: { rootStore?: {} }) => {
        if (props.rootStore) {
          return
        }
        return {
          rootStore,
          ...additionalStores,
        }
      }
    )(observer(wrappedComponent))
}
