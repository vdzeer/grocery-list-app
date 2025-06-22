import React from 'react'
import { RootNavigator } from '~/navigation'
import { AppCollector } from './hocs'

function App(): React.JSX.Element {
  return (
    <AppCollector>
      <RootNavigator />
    </AppCollector>
  )
}

export default App
