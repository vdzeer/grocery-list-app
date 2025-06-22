declare module '*.jpeg' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  import React from 'react'

  const content: React.FC<SvgProps>
  export default content
}
