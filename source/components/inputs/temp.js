import { TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Temp({ ...restProps }) {
  return (
    <TextInput
      keyboardType="numeric"
      {...restProps}
      style={{
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginRight: 0,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 2,
        borderColor: '#0496ff',
        maxWidth: 90
      }}
      placeholder="valor"
    />
  )
}
