import { Link as LinkReactRouterNative } from 'react-router-native'
import React from 'react'
import { View } from 'react-native'

export default function Link({ children, ...restProps }) {
  return (
    <LinkReactRouterNative
      style={{ backgroundColor: '#0496ff', borderRadius: 5, padding: 10, width: '100%' }}
      {...restProps}>
      {children}
    </LinkReactRouterNative>
  )
}
