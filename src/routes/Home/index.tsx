import React from 'react'
import { Dimensions, Button } from 'react-native'
import { NavigationFunctionComponent } from 'react-native-navigation'
import { BaseLayout, BaseText } from 'react-native-ui-block'
import { observer } from 'mobx-react-lite'
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated'

import { useRootStore } from 'store/root.store'

export type RouteHomeProps = {}

const { width } = Dimensions.get('window')
export const RouteHome: NavigationFunctionComponent<RouteHomeProps> = observer(function RouteHome({}) {
  /** States. */
  const { counterStore } = useRootStore()

  const translateXOffset = useSharedValue(width / 2 - 50)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(translateXOffset.value) }],
    }
  })

  const animateBox = () => {
    translateXOffset.value = Math.floor(Math.random() * 275)
  }

  return (
    <BaseLayout flex hAlign="center" vAlign="center">
      <BaseLayout size={{ width: '100%' }} hAlign="flex-start">
        <BaseLayout
          size={{ width: 100, height: 100 }}
          border={{ radius: 4 }}
          backgroundColor="black"
          style={animatedStyle}
          UnderlyingView={Animated.View}
        />
      </BaseLayout>

      <Button title="Animate the box" onPress={animateBox} />

      <BaseText fontSize={24} margin={{ bottom: 10 }}>
        {counterStore.countDescription}
      </BaseText>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="+ count" onPress={counterStore.incrementCount} />
      </BaseLayout>

      <BaseLayout margin={{ bottom: 10 }}>
        <Button title="- count" onPress={counterStore.decrementCount} />
      </BaseLayout>
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
