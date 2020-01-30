import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { Options } from 'react-native-navigation'
import { RootStore } from 'store/root.store'
import { RootType } from 'routes/types'

/**
 * ### Top level provider
 *
 * This is the top level Provider component wrapping all screens
 * with other packages' providers such as:
 *   - Mobx
 *   - Apollo
 *   - Redux
 */
const TopLevelProvider: React.FC<{ rootStore: RootStore }> = ({ children, rootStore }) => (
  <MobxProvider rootStore={rootStore}>{children}</MobxProvider>
)

/**
 * ### Wrapped component type
 *
 * Prop type for al screens wrapped with the TopLevelProvider
 */
type WrappedComponentType = React.FC & { options?: Options }

/**
 * ### Public routes wrap
 *
 * This is the HOC for all public routes.
 * Wraps the public routes with TopLevelProvider.
 */
export const wrapPublicRoutes = (WrappedComponent: WrappedComponentType, rootStore: RootStore) => {
  const HOC: RootType = props => {
    return (
      <TopLevelProvider rootStore={rootStore}>
        <WrappedComponent {...props} />
      </TopLevelProvider>
    )
  }

  HOC.options = WrappedComponent.options
  return HOC
}

/**
 * ### Private routes wrap
 *
 * This is the HOC for all private routes.
 * Wraps the public routes with TopLevelProvider.
 * Should also perform Auth check here.
 */
export const wrapPrivateRoutes = (WrappedComponent: WrappedComponentType, rootStore: RootStore) => {
  const HOC: RootType = props => {
    // Do auth check here. Logout if user has no auth token.

    return (
      <TopLevelProvider rootStore={rootStore}>
        <WrappedComponent {...props} />
      </TopLevelProvider>
    )
  }

  HOC.options = WrappedComponent.options
  return HOC
}
