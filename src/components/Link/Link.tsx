import { Link } from 'react-router-native'
import { StyleSheet, Text } from 'react-native'
import React from 'react'

type ComponentProps = {
  children: string
  to: string
}

export default function CustomLink({ to, children }: ComponentProps) {
  return (
    <Link underlayColor={'#062A6B'} style={style.container} to={to}>
      <Text style={style.text}>{children}</Text>
    </Link>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#093D9E',
    borderRadius: 5,
    width: '100%',
  },
  text: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
})
