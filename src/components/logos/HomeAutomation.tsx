import { Image, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeAutomationLogo() {
  const src = require('../../public/logo.png')

  return <Image style={style.img} source={src} />
}

const style = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
})
