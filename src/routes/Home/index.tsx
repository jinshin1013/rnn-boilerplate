import React from 'react'
import { Button } from 'react-native'
import { NavigationFunctionComponent } from 'react-native-navigation'
import { BaseLayout, BaseText } from 'react-native-ui-block'
import { observer } from 'mobx-react-lite'

import { Navigation } from 'navigation/functions'
import { Routes } from 'navigation/routes'
import { useRootStore } from 'store/root.store'

export type RouteHomeProps = {}

export const RouteHome: NavigationFunctionComponent<RouteHomeProps> = observer(function RouteHome({}) {
  /** States. */
  const { counterStore } = useRootStore()

  const showNoticeModal = () => {
    return Navigation.showModal({
      name: Routes.Notice,
    })
  }

  return (
    <BaseLayout flex hAlign="center" vAlign="center">
      <BaseText fontSize={24} margin={{ bottom: 10 }}>
        {counterStore.countDescription}
      </BaseText>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="+ count" onPress={counterStore.incrementCount} />
      </BaseLayout>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="- count" onPress={counterStore.decrementCount} />
      </BaseLayout>
      <Button title="Show Notice" onPress={showNoticeModal} />
    </BaseLayout>
  )
})

RouteHome.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
}
