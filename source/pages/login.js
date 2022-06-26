import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import LoginForm from '../components/forms/login'
import ScrollView from '../components/layouts/scrollView'

export default function LoginPage() {
  return (
    <ScrollView>
      <Container>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Bienvenido!</Text>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image style={{ borderRadius: 9999, height: 200, width: 200 }} source={require('../public/logo.png')} />
        </View>
        <View>
          <Text>Puedes iniciar sesión</Text>
          <LoginForm />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 5
          }}>
          <Text>Proyecto creado para Unicauca</Text>
          <Image
            style={{ height: 30, width: 30, borderRadius: 9999, marginLeft: 10 }}
            source={require('../public/logo_unicauca.jpg')}
          />
        </View>
      </Container>
    </ScrollView>
  )
}
