import { Image, Text, View } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View
      style={{
        backgroundColor: '#EDF2F8',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Image style={{ height: 50, width: 50 }} source={require('../../assets/loader_data.gif')} />
    </View>
  )
}
