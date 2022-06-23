import { ScrollView } from 'react-native'
import React from 'react'

export default function ScrollViewCustom({ children }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  )
}
