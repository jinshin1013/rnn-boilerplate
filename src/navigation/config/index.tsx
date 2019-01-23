import { Options } from 'react-native-navigation'
import { Platform } from 'react-native'

const shared: Options = {}

const ios: Options = {
  ...shared,
}

const android: Options = {
  ...shared,
}

export const defaultOptions: Options = Platform.select({
  android,
  ios,
})
