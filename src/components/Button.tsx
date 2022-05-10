import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native'
import React from 'react'

type ComponentProps = {
  title: string
  restProps: TouchableHighlightProps
}

export default function Button({ title, restProps }: ComponentProps) {
  return (
    <TouchableHighlight onPress={restProps.onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
