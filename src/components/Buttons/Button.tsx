import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from 'react-native'
import React, { ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function Button({ onPress, children }: ComponentProps) {
  return (
    <TouchableHighlight style={style.container} onPress={onPress} underlayColor={'#062A6B'}>
      <Text style={style.text}>{children}</Text>
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#0496ff',
    borderRadius: 15,
  },
  text: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
})
