import { Image, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import HeaderUserInfo from '../components/layouts/headerInfoUser'
import Nav from '../components/navs/nav'
import SmallCard from '../components/buttons/smallCard'
import Card from '../components/buttons/card'

export default function UserPage() {
  return (
    <Container>
      <HeaderUserInfo />
      <View>
        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
          Activar a desactivar dispositivos
        </Text>
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/turn.png')} />
            <Text>Alarma</Text>
          </Card>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/ventilador.png')} />
            <Text>Ventilador</Text>
          </Card>
        </View>
        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Abrir o cerrar puertas</Text>
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
          <Card>
            <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../assets/door.png')} />
            <Text>Puerta principal</Text>
          </Card>
        </View>
        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Encender o apagar luces</Text>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <SmallCard>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/bed.png')} />
          </SmallCard>
          <SmallCard>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/toilet.png')} />
          </SmallCard>
          <SmallCard>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/gas.png')} />
          </SmallCard>
          <SmallCard>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/living-room.png')} />
          </SmallCard>
        </View>
      </View>
      <Nav />
    </Container>
  )
}
