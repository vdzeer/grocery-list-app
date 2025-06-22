import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { Box } from '@gluestack-ui/themed'

export function GroceriesSkeleton() {
  const opacity = useRef(new Animated.Value(0.3)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    )

    animation.start()
    return () => animation.stop()
  }, [opacity])

  return (
    <Box>
      <Animated.View style={{ opacity }}>
        <Box
          bg="$backgroundDark700"
          width="100%"
          height={60}
          borderRadius="$lg"
        />
      </Animated.View>
    </Box>
  )
}
