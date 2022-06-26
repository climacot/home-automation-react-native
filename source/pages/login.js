import { View, Text } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import LoginForm from '../components/forms/login'
import ScrollView from '../components/layouts/scrollView'

export default function LoginPage() {
  return (
    <ScrollView>
      <Container>
        <Text>Bienvenido!</Text>
        <Text>Puedes iniciar sesión</Text>
        <LoginForm />
      </Container>
    </ScrollView>
  )
}
