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
        borderWidth: 1.5,
        borderColor: state ? '#50B063' : '#FFFFFF',
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        padding: 12,
        flexGrow: 1,
        minWidth: 120,
        elevation: 1
      }}
      {...restProps}>
      <>{children}</>
    </ButtonWithoutBackground>
  )
}
