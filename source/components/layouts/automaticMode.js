import { Image, Text, View } from 'react-native'
import Card from '../buttons/card'
import Loader from '../loader/loader'
import React from 'react'
import useSensors from '../../hooks/useSensors'
import SmallCard from '../buttons/smallCard'
import Temp from '../inputs/temp'
import Control from '../buttons/control'
import SetTempForm from '../forms/setTemp'

export default function AutomaticMode() {
  const { load } = useSensors()

  if (!load) return <Loader />

  return (
    <View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
        Encender o apagar luces por medio de sensores
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
        {/* <SmallCard name={'livingRoom'}>
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
        </SmallCard> */}
        <SmallCard name={'room'} disable>
          <Image style={{ width: 35, height: 35, marginBottom: 10 }} source={require('../../assets/living-room.png')} />
          <Text>Sala</Text>
        </SmallCard>
      </View>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
        Temperatura limite para el control de ventiladores
      </Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
        <SetTempForm />
      </View>
      {/* <Text style={{ textAlign: 'center', marginVertical: 10, color: '#000000' }}>
        Rango de hora para encendido de la alarma
      </Text> */}
      {/* <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
        <Card name={'alarm'} disable>
          <Image style={{ width: 30, height: 30, marginBottom: 10 }} source={require('../../assets/turn.png')} />
          <Text>Alarma</Text>
        </Card>
      </View> */}
    </View>
  )
}
