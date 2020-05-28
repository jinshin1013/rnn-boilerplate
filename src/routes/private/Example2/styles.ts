import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Style {
  container: ViewStyle
  welcome: TextStyle
}

export default StyleSheet.create<Style>({
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
})
