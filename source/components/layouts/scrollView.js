import React from 'react'
import { ScrollView as ScrollViewReactNative, Dimensions, View } from 'react-native'

export default function ScrollView({ children }) {
  return (
    <ScrollViewReactNative showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollViewReactNative>
  )
}
