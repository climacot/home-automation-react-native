import React from 'react'
import { TouchableHighlight } from 'react-native'

export default function Button({ children, ...restProps }) {
  return (
    <TouchableHighlight
      style={{ backgroundColor: '#0496ff', borderRadius: 5, padding: 10, width: '100%' }}
      {...restProps}>
      {children}
    </TouchableHighlight>
  )
}
