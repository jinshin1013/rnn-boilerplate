import { Layout, Navigation, Options, AnimationOptions } from 'react-native-navigation'

type NavigationProps<P> = {
  name: string
  passProps?: P
  options?: Options
}

export const NavigationHelpers = {
  /**
   * Set single component layout
   */
  setLayoutChildren<P>(props: NavigationProps<P>): Layout<P> {
    return {
      component: { ...props },
    }
  },

  /**
   * Set stacked component layout
   */
  setLayoutStackChildren<P>(props: NavigationProps<P>, options?: Options): Layout {
    return {
      stack: { children: [this.setLayoutChildren(props)], options },
    }
  },

  /**
   * ### SetRoot
   * Set the new Root stacked component layout.
   */
  setRoot<R>(props: NavigationProps<R>) {
    return Navigation.setRoot({ root: this.setLayoutStackChildren(props) })
  },

  /**
   * ### SetNewStackRoot
   * Set the new StackRoot component layout.
   * This is slightly different to `setRoot` function. This will animate like `push` function.
   */
  setNewStackRoot<R>(toId: string, props: NavigationProps<R>) {
    return Navigation.setStackRoot(toId, this.setLayoutChildren(props))
  },

  /**
   * ### PushTo
   * Push a new screen to the current stack.
   */
  pushTo<R>(toId: string, props: NavigationProps<R>) {
    return Navigation.push(toId, this.setLayoutChildren(props))
  },

  /**
   * ### Pop
   * Pop the current screen from the stack.
   */
  pop(currentId: string, options?: Options) {
    return Navigation.pop(currentId, options)
  },

  /**
   * ### PopTo
   * Pop to the wanted screen from the current stack.
   */
  popTo(toId: string, options?: Options) {
    return Navigation.popTo(toId, options)
  },

  /**
   * ### ShowOverlay
   * Open a single component overlay layout.
   */
  showOverlay<P>(props: NavigationProps<P>) {
    return Navigation.showOverlay(this.setLayoutChildren(props))
  },

  /**
   * ### ShowStackModal
   * Open a stacked component modal layout.
   */
  showStackModal<P>(props: NavigationProps<P>) {
    return Navigation.showModal(this.setLayoutStackChildren(props))
  },

  /**
   * ### DismissModal
   * Dismiss the current modal.
   */
  dismissModal(currentId: string, options?: Options) {
    return Navigation.dismissModal(currentId, options)
  },
}
