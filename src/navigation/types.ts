import { Options } from 'react-native-navigation'

export interface NavigationProps {
  componentId: string
}

export interface NavigationOptions<R> {
  options?: ((props: R) => Options) | Options
}

export type RootType<P> = React.FC<NavigationProps & P> & NavigationOptions<P>
