import React, { useEffect } from 'react'
import { NavigationFunctionComponent } from 'react-native-navigation'
import { BaseLayout, BaseText } from 'react-native-ui-block'
import { observer } from 'mobx-react-lite'

import { useRootStore, rootStore } from 'store/root.store'

type RouteSplashProps = {}

export const RouteSplash: NavigationFunctionComponent<RouteSplashProps> = observer(function RouteSplash({}) {
  /** States. */
  const { hydrateStores } = useRootStore()

  useEffect(() => {
    hydrateStores().then(() => {
      rootStore.login()
    })
  }, [])

  return (
    <BaseLayout flex hAlign="center" vAlign="center" backgroundColor="#404040">
      <BaseText fontSize={24} color="white">
        React Native Boilerplate
      </BaseText>
    </BaseLayout>
  )
})

RouteSplash.options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
}
