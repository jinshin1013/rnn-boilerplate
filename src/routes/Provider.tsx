import React from 'react'
import { Options } from 'react-native-navigation'
import { RootType } from 'routes/types'

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
 * You can use this HOC to wrap with any provider (Redux, Apollo, etc).
 * You can also add things like global event listener or anything global really.
 */
export const wrapPublicRoutes = (WrappedComponent: WrappedComponentType) => {
  const HOC: RootType = (props) => {
    return <WrappedComponent {...props} />
  }

  HOC.options = WrappedComponent.options
  return HOC
}

/**
 * ### Private routes wrap
 *
 * This is the HOC for all private routes.
 * Wraps the public routes with TopLevelProvider.
 * You can use this HOC to wrap with any provider (Redux, Apollo, etc).
 * Should also perform Auth check here.
 */
export const wrapPrivateRoutes = (WrappedComponent: WrappedComponentType) => {
  const HOC: RootType = (props) => {
    // Do auth check here. Logout if user has no auth token.

    return <WrappedComponent {...props} />
  }

  HOC.options = WrappedComponent.options
  return HOC
}
