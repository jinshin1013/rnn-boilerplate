import { Options } from 'react-native-navigation'

export interface NavigationProps {
  componentId: string
}

export interface NavigationOptions<Props> {
  options?: ((props: Props) => Options) | Options
}

export type RootType<Props = {}> = React.FC<NavigationProps & Props> & NavigationOptions<Props>
