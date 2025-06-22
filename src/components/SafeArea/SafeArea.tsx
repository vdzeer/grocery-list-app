import React from 'react'
import { SafeAreaView } from '@gluestack-ui/themed'
import { SafeAreaProps } from './types'

export function SafeArea({ children }: SafeAreaProps) {
  return (
    <SafeAreaView flex={1} backgroundColor="$backgroundDark900">
      {children}
    </SafeAreaView>
  )
}
