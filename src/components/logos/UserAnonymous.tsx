import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function UserAnonymousLogo() {
  const src = require('../../public/user.png')

  return (
    <View style={style.container}>
      <Image style={style.logo} source={src} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 9999,
  },
})
