import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

import { AnimatedBootSplash, SafeArea } from '~/components'

const queryClient = new QueryClient()

export function AppCollector({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config} colorMode="dark">
        <SafeArea>
          {children}

          {visible && (
            <AnimatedBootSplash
              onAnimationEnd={() => {
                setVisible(false)
              }}
            />
          )}
        </SafeArea>
      </GluestackUIProvider>
    </QueryClientProvider>
  )
}
