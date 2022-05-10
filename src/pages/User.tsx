import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import React from 'react'

export default function UserPage() {
  BackHandlerExit()

  return (
    <View>
      <AuthStatus />
      <Text>User Page!</Text>
    </View>
  )
}
