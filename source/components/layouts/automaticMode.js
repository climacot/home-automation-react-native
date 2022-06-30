import { Image, Text, View } from 'react-native'
import Card from '../buttons/card'
import React from 'react'
import SmallCard from '../buttons/smallCard'
import useMode from '../../hooks/useMode'
import useSensors from '../../hooks/useSensors'
import Loader from '../loader/loader'

export default function AutomaticMode() {
  const { load } = useSensors()

  if (!load) return <Loader />

  return (
    <View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
        Encender o apagar luces por medio de sensores
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
    </View>
  )
}
