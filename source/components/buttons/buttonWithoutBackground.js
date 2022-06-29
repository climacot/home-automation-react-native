import { TouchableHighlight } from 'react-native'
import React from 'react'

export default function ButtonWithoutBackground({ children, ...restProps }) {
  return (
    <TouchableHighlight style={{ borderRadius: 5, padding: 10, width: '100%' }} {...restProps}>
      {children}
    </TouchableHighlight>
  )
}
