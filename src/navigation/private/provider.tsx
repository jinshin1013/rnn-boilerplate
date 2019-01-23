import * as React from 'react'
import {} from 'react-native'
import { Provider } from 'mobx-react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import { RootStore } from 'store/rootStore'

export const createPrivateProvider = (
  WrappedComponent: React.ComponentType,
  rootStore: RootStore
) => {
  class HOC extends React.Component {
    render() {
      return (
        <Provider rootStore={rootStore}>
          <WrappedComponent {...this.props} />
        </Provider>
      )
    }
  }

  hoistNonReactStatic(HOC, WrappedComponent)
  return HOC
}
