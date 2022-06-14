import { Link } from 'react-router-native'
import { StyleSheet, Text } from 'react-native'
import React from 'react'

type ComponentProps = {
  title?: string
  to: string
}

export default function CustomLink({ to, title }: ComponentProps) {
  return (
    <Link underlayColor={'#062A6B'} style={style.link} to={to}>
      <Text style={style.text}>{title}</Text>
    </Link>
  )
}

const style = StyleSheet.create({
  link: {
    padding: 10,
    backgroundColor: '#093D9E',
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
})
