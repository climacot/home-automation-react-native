import { Link } from 'react-router-native'
import { StyleSheet, Text } from 'react-native'
import React from 'react'

type ComponentProps = {
  title: string
  path: string
}

export default function ButtonLink({ title, path }: ComponentProps) {
  return (
    <Link style={styles.container} to={path}>
      <Text style={styles.title}>{title}</Text>
    </Link>
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
