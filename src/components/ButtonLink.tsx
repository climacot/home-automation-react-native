import { Link } from 'react-router-native'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type ComponentProps = {
  title: string
  path: string
}

export default function ButtonLink({ title, path }: ComponentProps) {
  return (
    <TouchableHighlight style={styles.container}>
      <Link to={path}>
        <Text style={styles.title}>{title}</Text>
      </Link>
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
