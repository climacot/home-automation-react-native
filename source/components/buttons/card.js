import React, { useEffect, useState } from 'react'
import useMode from '../../hooks/useMode'
import useSensors from '../../hooks/useSensors'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function Card({ children, name, ...restProps }) {
  const { sensors, changeState } = useSensors()
  const { stringMode } = useMode()
  const state = sensors[stringMode][name]

  const handleClick = () => changeState(name)

  return (
    <ButtonWithoutBackground
      onPress={handleClick}
      underlayColor={'#5CD073'}
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
