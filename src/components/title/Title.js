import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Title({ children }) {
  const style = StyleSheet.create({
    title: {
      color: '#4B5361',
      textAlign: 'center',
    },
  })

  return <Text style={style.title}>{children}</Text>
}
