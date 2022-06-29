import React from 'react'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function SmallCard({ children, ...restProps }) {
  return (
    <ButtonWithoutBackground
      underlayColor={'#0F9D58'}
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 5,
        flexGrow: 1,
        paddingVertical: 10,
        elevation: 1
      }}
      {...restProps}>
      <>{children}</>
    </ButtonWithoutBackground>
  )
}
