import { Button, Text, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

export default function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <Text>You are not logged in.</Text>
  }

  return (
    <View>
      <Button
        title="Cerrar sesion"
        onPress={() => {
          auth.signOut(() => navigate('/'))
        }}
      />
    </View>
  )
}
