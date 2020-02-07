import React, { useContext } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RootType } from 'routes/types'
import { NavigationHelpers } from 'routes/functions'
import { PrivateRoutes } from 'routes/routes'
import { RootStoreContext } from 'store/root.store'

import styles from './styles'

interface ExampleProps {
  componentId: string
}

const Example: RootType<ExampleProps> = observer(function Example({ componentId }) {
  const { exampleStore } = useContext(RootStoreContext)

  const onPress = () => {
    NavigationHelpers.pushTo(componentId, {
      name: PrivateRoutes.Example2,
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 1!</Text>
        <Text>{`Count: ${exampleStore.count}`}</Text>
        <Button title="Navigate to Next" onPress={onPress} />
        <Button title="Increment count" onPress={exampleStore.increment} />
        <Button title="Decrement count" onPress={exampleStore.decrement} />
      </View>
    </ScrollView>
  )
})

Example.options = {
  topBar: {
    noBorder: false,
    title: { text: 'Example 1' },
    largeTitle: { visible: true, color: 'coral' },
  },
}

export { Example }
