import React, { useContext } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { observer } from 'mobx-react-lite'
import { PrivateRoutes } from 'routes/routes'
import { RootType } from 'routes/types'
import { NavigationHelpers } from 'routes/functions'
import { RootStoreContext } from 'store/root.store'

import styles from './styles'

interface Example2Props {
  componentId: string
}

const Example2: RootType<Example2Props> = observer(function Example2({ componentId }) {
  const { exampleStore } = useContext(RootStoreContext)

  const onNext = () => {
    return NavigationHelpers.pushTo(componentId, {
      name: PrivateRoutes.Example2,
    })
  }

  const onPopToRoot = () => {
    return Navigation.popToRoot(componentId)
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 2!</Text>
        <Text>{`Count: ${exampleStore.count}`}</Text>
        <Button title="Navigate to Next" onPress={onNext} />
        <Button title="Pop to root" onPress={onPopToRoot} />
        <Button title="Increment count" onPress={exampleStore.increment} />
        <Button title="Decrement count" onPress={exampleStore.decrement} />
      </View>
    </ScrollView>
  )
})

Example2.options = () => ({
  topBar: {
    noBorder: true,
    title: { text: 'Example 2' },
    largeTitle: { visible: true },
  },
})

export { Example2 }
