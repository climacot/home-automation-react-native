import React from 'react'
import ButtonWithoutBackground from '../buttons/buttonWithoutBackground'

export default function SmallCard({ children, ...restProps }) {
  return (
    <ButtonWithoutBackground
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        padding: 20,
        flexGrow: 1,
        maxWidth: 70
      }}
      {...restProps}>
      <>{children}</>
    </ButtonWithoutBackground>
  )
}
