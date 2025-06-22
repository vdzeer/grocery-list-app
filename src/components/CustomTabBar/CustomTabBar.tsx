import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HStack, Icon, Pressable, Text, VStack } from '@gluestack-ui/themed'
import { ListIcon, PlusCircleIcon } from 'lucide-react-native'
import { ROUTES } from '~/types/routes'

const TABS = {
  [ROUTES.GROCERY_LIST]: {
    label: 'List',
    icon: ListIcon,
  },
  [ROUTES.ADD_GROCERY]: {
    label: 'Add Grocery',
    icon: PlusCircleIcon,
  },
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <HStack
      h={65}
      borderTopWidth={1}
      borderTopColor="$borderDark700"
      alignItems="center"
      justifyContent="space-around"
      bg="$backgroundDark850">
      {state.routes.map((route, index) => {
        const isFocused = state.index === index
        const tab = TABS[route.name as keyof typeof TABS]

        if (!tab) return null

        const { label, icon } = tab

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.reset({
              index: 0,
              routes: [{ name: route.name }],
            })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <Pressable
            key={route.key}
            flex={1}
            alignItems="center"
            onPress={onPress}
            onLongPress={onLongPress}>
            <VStack alignItems="center" space="xs">
              <Icon
                as={icon}
                size="lg"
                color={isFocused ? '$textLight100' : '$textDark400'}
              />

              <Text
                size="sm"
                fontWeight="$medium"
                color={isFocused ? '$textLight100' : '$textDark400'}>
                {label}
              </Text>
            </VStack>
          </Pressable>
        )
      })}
    </HStack>
  )
}
