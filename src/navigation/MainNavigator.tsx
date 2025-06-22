import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTES } from '~/types/routes'
import { CustomTabBar } from '~/components'
import { GroceryListScreen, AddGroceryScreen } from '~/screens'

const Tab = createBottomTabNavigator()

export function MainNavigator() {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={ROUTES.GROCERY_LIST} component={GroceryListScreen} />
      <Tab.Screen name={ROUTES.ADD_GROCERY} component={AddGroceryScreen} />
    </Tab.Navigator>
  )
}
