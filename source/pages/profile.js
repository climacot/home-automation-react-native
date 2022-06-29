import { Image, Text, View } from 'react-native'
import Button from '../components/buttons/button'
import Container from '../components/layouts/container'
import Nav from '../components/navs/nav'
import React from 'react'
import useUser from '../hooks/useUser'

export default function ProfilePage() {
  const { singout, user } = useUser()
  const photo = user.photo && user.photo.length !== 0 ? { uri: user.photo } : require('../public/logo.png')

  return (
    <Container>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 100 }}>
        <Image
          loadingIndicatorSource={require('../public/logo.png')}
          style={{ width: 200, height: 200, borderRadius: 9999 }}
          source={photo}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text>Nombre: {user.name}</Text>
        <Text>Identificación: {user.id}</Text>
        <Text>Cargo: {user.rol}</Text>
        <Text>Correo: {user.email}</Text>
      </View>
      <Button onPress={singout}>
        <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Cerrar sesión</Text>
      </Button>
      <Nav />
    </Container>
  )
}
