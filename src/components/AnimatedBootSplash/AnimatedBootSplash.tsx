import React, { useState } from 'react'
import { Animated, Dimensions, Platform } from 'react-native'
import BootSplash from 'react-native-bootsplash'

import logoImage from '../../../assets/bootsplash/logo.png'
import manifest from '../../../assets/bootsplash/manifest.json'

const useNativeDriver = Platform.OS !== 'web'

type Props = {
  onAnimationEnd: () => void
}

export function AnimatedBootSplash({ onAnimationEnd }: Props) {
  const [opacity] = useState(() => new Animated.Value(1))
  const [translateY] = useState(() => new Animated.Value(0))

  const { container, logo } = BootSplash.useHideAnimation({
    manifest,

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    logo: logoImage,

    animate: () => {
      const { height } = Dimensions.get('window')

      setTimeout(() => {
        Animated.stagger(250, [
          Animated.spring(translateY, {
            useNativeDriver,
            toValue: -50,
          }),
          Animated.spring(translateY, {
            useNativeDriver,
            toValue: height,
          }),
        ]).start()

        Animated.timing(opacity, {
          useNativeDriver,
          toValue: 0,
          duration: 150,
          delay: 350,
        }).start(() => {
          onAnimationEnd()
        })
      }, 500)
    },
  })

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ translateY }] }]}
      />
    </Animated.View>
  )
}
