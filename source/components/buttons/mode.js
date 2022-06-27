import React from 'react'
import { Image, Text, TouchableHighlight } from 'react-native'
import useMode from '../../hooks/useMode'

export default function ModeButton() {
  const { mode, load, changeMode } = useMode()

  if (!load) return <Image style={{ width: 40, height: 40 }} source={require('../../assets/loader.gif')} />

  return (
    <TouchableHighlight
      onPress={changeMode}
      style={{
        backgroundColor: '#0496ff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
      }}>
      <Text style={{ color: '#FFFFFF' }}>{mode ? 'Ir a Manual' : 'Ir a Automático'}</Text>
    </TouchableHighlight>
  )
}
