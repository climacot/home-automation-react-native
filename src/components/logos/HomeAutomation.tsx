import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function HomeAutomationLogo() {
  const src = require('../../public/logo.png')

  return (
    <View style={style.container}>
      <Image style={style.img} source={src} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  img: {
    height: 200,
    width: 200,
  },
})
