import { StyleSheet, Text } from 'react-native'
import React, { ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function Title({ children }: ComponentProps) {
  return <Text style={style.title}>{children}</Text>
}

const style = StyleSheet.create({
  title: {
    color: '#093D9E',
    fontSize: 30,
  },
})
