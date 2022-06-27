import React from 'react'
import { Image, Switch, Text, TouchableHighlight, View } from 'react-native'
import useMode from '../../hooks/useMode'

export default function ModeButton() {
  const { mode, load, changeMode } = useMode()

  if (!load) return <Image style={{ width: 40, height: 40 }} source={require('../../assets/loader.gif')} />

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor={mode ? '#0496FF' : '#0F9D58'}
        onValueChange={changeMode}
        value={mode}
      />
      <Text>{mode ? 'manual' : 'automatico'}</Text>
    </View>
  )
}
