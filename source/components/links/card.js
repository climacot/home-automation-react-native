import React from 'react'
import { View } from 'react-native'
import Link from './link'

export default function Card({ children, ...restProps }) {
  return (
    <Link
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        padding: 12,
        flexGrow: 1,
        minWidth: 160,
        maxWidth: 180
      }}
      {...restProps}>
      <>{children}</>
    </Link>
  )
}
