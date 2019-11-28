import React from 'react'
import { Provider } from 'mobx-react'
import { Options } from 'react-native-navigation'
import { RootStore } from 'store/rootStore'
import { RootType } from 'navigation/types'

export const createPublicProvider = (
  WrappedComponent: React.FC & { options?: Options },
  rootStore: RootStore
) => {
  const HOC: RootType<{}> = (props) => {
    return (
      <Provider rootStore={rootStore}>
        <WrappedComponent {...props} />
      </Provider>
    )
  }

  HOC.options = WrappedComponent.options
  return HOC
}
