import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native'
import React from 'react'

export default function Button(restProps: TouchableHighlightProps) {
  return (
    <TouchableHighlight {...restProps} style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
    </TouchableHighlight>
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
