import { Switch, Text, View } from 'react-native'
import React from 'react'
import useMode from '../../hooks/useMode'

export default function ModeButton() {
  const { mode, changeMode } = useMode()

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 80 }}>
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
