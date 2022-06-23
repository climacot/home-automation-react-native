import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageBackgroundCustom({ children }) {
  const src = require('../../public/index/background.png')

  return (
    <ImageBackground source={src} style={style.container}>
      {children}
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})
