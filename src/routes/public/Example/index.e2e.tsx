import React from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { RootType } from 'routes/types'
import { NavigationHelpers } from 'routes/functions'
import { PrivateRoutes } from 'routes/routes'

import styles from './styles'

interface ExampleProps {
  componentId: string
}

const Example: RootType<ExampleProps> = ({ componentId }) => {
  const onPress = () => {
    NavigationHelpers.pushTo(componentId, {
      name: PrivateRoutes.Example2,
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 1 E2E!!</Text>
        <Button title="Navigate to Next" onPress={onPress} />
      </View>
    </ScrollView>
  )
}

Example.options = {
  topBar: {
    noBorder: false,
    title: { text: 'Example 1' },
    largeTitle: { visible: true },
  },
}

export { Example }
