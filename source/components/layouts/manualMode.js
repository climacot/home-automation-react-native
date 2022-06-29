import { Image, Text, View } from 'react-native'
import Card from '../buttons/card'
import React from 'react'
import SmallCard from '../buttons/smallCard'
import useMode from '../../hooks/useMode'
import useSensors from '../../hooks/useSensors'
import Loader from '../loader/loader'

export default function ManualMode() {
  const { load } = useSensors()

  if (!load) return <Loader />

  return (
    <View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
        Activar a desactivar dispositivos
      </Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
        <Card name={'alarm'}>
          <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../../assets/turn.png')} />
          <Text>Alarma</Text>
        </Card>
        <Card name={'fan'}>
          <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../../assets/ventilador.png')} />
          <Text>Ventilador</Text>
        </Card>
      </View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Abrir o cerrar puertas</Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
        <Card name={'door'}>
          <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../../assets/door.png')} />
          <Text>Puerta principal</Text>
        </Card>
      </View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>Encender o apagar luces</Text>
      <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
        <SmallCard name={'livingRoom'}>
          <Image style={{ width: 35, height: 35, marginBottom: 10 }} source={require('../../assets/bed.png')} />
          <Text>Habit..</Text>
        </SmallCard>
        <SmallCard name={'bath'}>
          <Image style={{ width: 35, height: 35, marginBottom: 10 }} source={require('../../assets/toilet.png')} />
          <Text>Baño</Text>
        </SmallCard>
        <SmallCard name={'kitchen'}>
          <Image style={{ width: 35, height: 35, marginBottom: 10 }} source={require('../../assets/gas.png')} />
          <Text>Cocina</Text>
        </SmallCard>
        <SmallCard name={'room'}>
          <Image style={{ width: 35, height: 35, marginBottom: 10 }} source={require('../../assets/living-room.png')} />
          <Text>Sala</Text>
        </SmallCard>
      </View>
    </View>
  )
}
