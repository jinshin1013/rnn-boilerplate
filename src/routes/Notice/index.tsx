import React from 'react'
import { Button } from 'react-native'
import { NavigationFunctionComponent } from 'react-native-navigation'
import { BaseLayout, BaseText } from 'react-native-ui-block'
import { observer } from 'mobx-react-lite'

import { Navigation } from 'navigation/functions'
import { useRootStore } from 'store/root.store'

type RouteNoticeProps = {}

export const RouteNotice: NavigationFunctionComponent<RouteNoticeProps> = observer(function RouteNotice({
  componentId,
}) {
  /** States. */
  const { counterStore } = useRootStore()

  return (
    <BaseLayout flex vAlign="center" hAlign="center">
      <BaseText fontSize={24} margin={{ bottom: 10 }}>
        {counterStore.countDescription}
      </BaseText>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="+ count" onPress={counterStore.incrementCount} />
      </BaseLayout>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="- count" onPress={counterStore.decrementCount} />
      </BaseLayout>

      <Button title="Close modal" onPress={() => Navigation.dismissModal(componentId)} />
    </BaseLayout>
  )
})

RouteNotice.options = {
  topBar: {
    title: {
      text: 'Notice modal',
    },
  },
  layout: {
    backgroundColor: 'white',
    componentBackgroundColor: 'white',
  },
}
