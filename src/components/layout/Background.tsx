import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
}

const screenHeight = Dimensions.get('window').height

export default function BackgroundLayout({ children }: ComponentProps) {
  const src = require('../../public/wallpaper.png')

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <ImageBackground resizeMode="cover" resizeMethod="scale" source={src} style={style.container}>
          {children}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
  },
})
