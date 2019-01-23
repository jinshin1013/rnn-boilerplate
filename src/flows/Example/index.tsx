import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Navigation, Options } from 'react-native-navigation'
import { publicRoute } from 'navigation/public/routes'

interface Props {
  componentId: string
}

export class Example extends Component<Props> {
  static options(): Options {
    return {
      topBar: {
        noBorder: false,
        title: { text: 'Example 1' },
        largeTitle: { visible: true },
      },
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Example 1!</Text>
          <Button
            title="Navigate to Next"
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: publicRoute.example2,
                },
              })
            }}
          />

          <Button
            title="Pop to root"
            onPress={() => {
              Navigation.popToRoot(this.props.componentId)
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
