import React from 'react'
import Link from './link'

export default function Card({ children, ...restProps }) {
  return (
    <Link
      underlayColor={'#F8F8F8'}
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        padding: 12,
        flexGrow: 1,
        minWidth: 120
      }}
      {...restProps}>
      <>{children}</>
    </Link>
  )
}
