import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Title({ children, fontSize, fontWeight = 'normal' }) {
  const style = StyleSheet.create({
    title: {
      color: '#4B5361',
      fontWeight,
      fontSize,
      textAlign: 'center',
    },
  })

  return <Text style={style.title}>{children}</Text>
}
