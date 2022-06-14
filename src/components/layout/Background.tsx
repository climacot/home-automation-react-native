import React, { ReactNode } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

type ComponentProps = {
  children: ReactNode
}

export default function BackgroundLayout({ children }: ComponentProps) {
  const src = require('../../public/wallpaper.png')

  return (
    <ImageBackground resizeMode="cover" resizeMethod="scale" source={src} style={style.container}>
      {children}
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
})
