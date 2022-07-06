import React, { useEffect, useState } from 'react'
import useMode from '../../hooks/useMode'
import useSensors from '../../hooks/useSensors'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function Card({ children, name, disable = false, ...restProps }) {
  const { sensors, changeState } = useSensors()
  const { stringMode } = useMode()
  const state = sensors[stringMode][name]

  const handleClick = () => {
    if (!disable) {
      changeState(name)
    }
  }

  return (
    <ButtonWithoutBackground
      onPress={handleClick}
      underlayColor={!disable ? '#5CD073' : '#FFFFFF'}
      style={{
        backgroundColor: state ? '#5CD073' : '#FFFFFF',
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        padding: 12,
        flexGrow: 1,
        minWidth: 120,
        elevation: 2
      }}
      {...restProps}>
      <>{children}</>
    </ButtonWithoutBackground>
  )
}
