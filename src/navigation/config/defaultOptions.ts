import { Options } from 'react-native-navigation'

export const navigationDefaultOptions: Options = {
  animations: {
    push: { waitForRender: true },
    setRoot: { waitForRender: true },
    setStackRoot: { waitForRender: true },
    showModal: { waitForRender: true },
    dismissModal: { waitForRender: true },
    pop: { waitForRender: true },
  },
}
