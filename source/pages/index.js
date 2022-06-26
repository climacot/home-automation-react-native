import { Text, View } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import Link from '../components/links/link'
import LogoWithBackground from '../components/logos/logoWithBackground'

export default function IndexPage() {
  return (
    <Container>
      <View style={{ width: '100%', maxHeight: 300 }}>
        <LogoWithBackground />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Controla tu casa en pocos pasos</Text>
      <View style={{ marginBottom: 5 }}>
        <Link to={'/login'}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Siguiente</Text>
        </Link>
      </View>
    </Container>
  )
}
