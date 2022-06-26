import React from 'react'
import { TextInput } from 'react-native'

export default function Input({ ...restProps }) {
  return (
    <TextInput
      {...restProps}
      style={{
        borderRadius: 5,
        borderWidth: 0,
        fontSize: 15,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#FFFFFF'
      }}
    />
  )
}
