import React from 'react'
import { Image } from 'react-native'

export default function LogoWithBackground() {
  return (
    <Image
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
      source={require('../../public/logo_with_background.png')}
    />
  )
}
