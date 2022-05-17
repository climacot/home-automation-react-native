import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function ButtonItem(props: any) {
  const { onPress, children } = props

  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      {children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#8DC9FF',
    borderRadius: 5,
  },
})
