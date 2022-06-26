import { View, Dimensions } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get('window').height

export default function Container({ children }) {
  return (
    <View
      style={{
        display: 'flex',
        height: screenHeight,
        justifyContent: 'space-between',
        backgroundColor: '#EDF2F8',
        paddingHorizontal: 5
      }}>
      {children}
    </View>
  )
}
