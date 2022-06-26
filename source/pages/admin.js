import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import Card from '../components/links/card'
import Nav from '../components/navs/nav'
import HeaderUserInfo from '../components/layouts/headerInfoUser'

export default function AdminPage() {
  return (
    <Container>
      <HeaderUserInfo />
      <View>
        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Administración</Text>
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/user.png')} />
            <Text>Registrar</Text>
          </Card>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/delete.png')} />
            <Text>Eliminar</Text>
          </Card>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/search.png')} />
            <Text>Consultar</Text>
          </Card>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/check.png')} />
            <Text>Editar</Text>
          </Card>
        </View>
        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Otras opciones</Text>
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
          <Card>
            <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={require('../assets/manual.png')} />
            <Text>Guía</Text>
          </Card>
          <Card>
            <Image style={{ width: 40, height: 40, marginBottom: 10 }} source={require('../assets/starts.png')} />
            <Text>PQRS</Text>
          </Card>
        </View>
      </View>
      <Nav />
    </Container>
  )
}
