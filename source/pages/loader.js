import { Image, Text, View } from 'react-native'
import React from 'react'

export default function LoaderPage() {
  return (
    <View
      style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Text>App domotica</Text>
      <Image style={{ height: 50, width: 50 }} source={require('../assets/loader.gif')} />
      <Text>Cargando. . .</Text>
    </View>
  )
}
