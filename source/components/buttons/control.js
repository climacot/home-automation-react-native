import React from 'react'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function Control({ children, name, ...restProps }) {
  return (
    <ButtonWithoutBackground
      underlayColor={'#5CD073'}
      style={{
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        marginLeft: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: 12,
        flexGrow: 1,
        maxWidth: 80,
        elevation: 2,
        backgroundColor: '#0496ff'
      }}
      {...restProps}>
      {children}
    </ButtonWithoutBackground>
  )
}
