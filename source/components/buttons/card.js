import React from 'react'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function Card({ children, ...restProps }) {
  return (
    <ButtonWithoutBackground
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
    </ButtonWithoutBackground>
  )
}
