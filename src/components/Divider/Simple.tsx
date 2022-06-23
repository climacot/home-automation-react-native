import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function SimpleDivider({ children }: ComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5C5C5',
    marginVertical: 10,
    padding: 10,
  },
  text: {
    color: '#000000',
    fontSize: 17,
    textAlign: 'center',
  },
})
