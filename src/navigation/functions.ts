import { Options, Navigation } from 'react-native-navigation'

type NavigationProps = {
  name: string
  passProps?: object
  options?: Options
}

function setRoot(props: NavigationProps) {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{ component: { ...props } }],
      },
    },
  })
}

function setSingleRoot(props: NavigationProps) {
  Navigation.setRoot({
    root: {
      component: { ...props },
    },
  })
}

function setNewStackRoot(componentId: string, props: NavigationProps) {
  Navigation.setStackRoot(componentId, {
    component: { ...props },
  })
}

function pushTo(componentId: string, props: NavigationProps) {
  Navigation.push(componentId, {
    component: { ...props },
  })
}

export const NavigationHelpers = {
  setRoot,
  setSingleRoot,
  setNewStackRoot,
  pushTo,
}
