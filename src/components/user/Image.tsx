import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import React from 'react'

type ComponentProps = {
  source: ImageSourcePropType
}

export default function UserImage({ source }: ComponentProps) {
  return (
    <View style={style.container}>
      <Image style={style.img} source={source} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  img: {
    borderRadius: 9999,
    height: 100,
    width: 100,
  },
})
