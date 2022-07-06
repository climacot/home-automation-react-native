import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import useSensors from '../../hooks/useSensors'
import Control from '../buttons/control'
import Temp from '../inputs/temp'
// id.replace(/[^0-9]/g, '')
export default function SetTempForm() {
  const { sensors, changeTemp } = useSensors()
  const state = sensors['automatic']['fan']['limit']
  const state2 = sensors['automatic']['fan']['temp']
  const [temp, setTemp] = useState(state.toString())

  const handleClick = () => {
    changeTemp(parseInt(temp))
  }

  return (
    <>
      <Temp value={temp.replace(/[^0-9]/g, '')} onChangeText={setTemp} />
      <Text>{state2}</Text>
      <Control onPress={handleClick}>
        <Image style={{ width: 30, height: 30 }} source={require('../../assets/check.png')} />
      </Control>
    </>
  )
}
