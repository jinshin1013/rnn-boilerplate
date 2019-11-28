import { Layout, Navigation, Options,  } from 'react-native-navigation'

type NavigationProps<P> = {
  name: string
  passProps?: P
  options?: Options
}

export function Children<P>(props: NavigationProps<P>): Layout<P> {
  return {
    component: { ...props },
  }
}

export function StackChildren<P>(props: NavigationProps<P>, options?: Options): Layout {
  return {
    stack: { children: [{ component: { ...props } }], options },
  }
}

export const NavigationHelpers = {
  setRoot: <R>(props: NavigationProps<R>) => Navigation.setRoot({ root: StackChildren(props) }),
  setNewStackRoot: <R>(id: string, props: NavigationProps<R>) =>
    Navigation.setStackRoot(id, Children(props)),
  pushTo: <R>(id: string, props: NavigationProps<R>) => Navigation.push(id, Children(props)),
  pop: (id: string, options?: Options) => Navigation.pop(id, options),
  popTo: (id: string, options?: Options) => Navigation.popTo(id, options),
  showOverlay: <R>(props: NavigationProps<R>) => Navigation.showOverlay(Children(props)),
  showStackModal: <R>(props: NavigationProps<R>) => Navigation.showModal(StackChildren(props)),
}