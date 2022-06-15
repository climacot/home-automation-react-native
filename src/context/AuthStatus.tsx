import { Button, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

export default function AuthStatus() {
  const { session, signOut } = useAuth()

  if (!session) return null

  return (
    <View>
      <Button color={'#42A6FF'} title={'Cerrar sesión'} onPress={() => signOut()} />
    </View>
  )
}
