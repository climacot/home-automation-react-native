import { Image, Text, View } from 'react-native'
import Button from '../components/buttons/button'
import Container from '../components/layouts/container'
import Nav from '../components/navs/nav'
import React from 'react'
import useUser from '../hooks/useUser'

export default function ProfilePage() {
  const { singout } = useUser()

  return (
    <Container>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 100 }}>
        <Image style={{ width: 200, height: 200 }} source={require('../public/logo.png')} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text>Nombre: Climaco Fernando Rodriguez Tovar</Text>
        <Text>Identificación: 1083931167</Text>
        <Text>Cargo: Administrador</Text>
        <Text>Correo: fermt111@gmail.com</Text>
      </View>
      <Button onPress={singout}>
        <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Cerrar sesión</Text>
      </Button>
      <Nav />
    </Container>
  )
}
