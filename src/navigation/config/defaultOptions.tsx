import { Options } from 'react-native-navigation'
import { Platform } from 'react-native'

const shared: Options = {
  topBar: {
    title: {
      color: 'black',
    },
    largeTitle: {
      color: 'black',
    },
    background: {
      color: 'white',
    },
  },
  animations: {
    push: { waitForRender: true },
    setRoot: { waitForRender: true },
    setStackRoot: { waitForRender: true },
    showModal: { waitForRender: true },
    dismissModal: { waitForRender: true },
    pop: { waitForRender: true },
  },
}

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
