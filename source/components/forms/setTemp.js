import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import useSensors from '../../hooks/useSensors'
import Card from '../buttons/card'
import Control from '../buttons/control'
import Temp from '../inputs/temp'
// id.replace(/[^0-9]/g, '')
export default function SetTempForm() {
  const { sensors, changeTemp } = useSensors()
  const state = sensors['automatic']['fan']['limit']
  const state2 = sensors['automatic']['fan']['temp']
  const [temp, setTemp] = useState(state.toString())
  const [active, setActive] = useState(false)

  const handleClick = () => {
    changeTemp(parseInt(temp))
  }

  useEffect(() => {
    setTemp(state.toString())
    if (state2 > state) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [state, state2])

  return (
    <>
      <Temp value={temp.replace(/[^0-9]/g, '')} onChangeText={setTemp} />
      <Control onPress={handleClick}>
        <Image style={{ width: 30, height: 30 }} source={require('../../assets/check.png')} />
      </Control>
      <View
        style={{
          backgroundColor: active ? '#5CD073' : '#FFFFFF',
          alignItems: 'center',
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'center',
          margin: 10,
          padding: 12,
          flexGrow: 1,
          minWidth: 120
        }}>
        <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../../assets/ventilador.png')} />
        <Text>Ventilador</Text>
      </View>
    </>
  )
}
