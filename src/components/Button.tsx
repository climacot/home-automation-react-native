import { Pressable, StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Button(props: any) {
  const { onPress, children, color } = props

  return (
    <Pressable onPress={onPress} style={styles.container}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#1552C2',
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
})
