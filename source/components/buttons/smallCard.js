import React from 'react'
import useMode from '../../hooks/useMode'
import useSensors from '../../hooks/useSensors'
import ButtonWithoutBackground from './buttonWithoutBackground'

export default function SmallCard({ children, name, disable = false, ...restProps }) {
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
        margin: 5,
        flexGrow: 1,
        paddingVertical: 10,
        elevation: 2
      }}
      {...restProps}>
      <>{children}</>
    </ButtonWithoutBackground>
  )
}
