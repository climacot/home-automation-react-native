import { Image, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import React from 'react'

export default function UserMenuManual() {
  return (
    <View>
      <Text style={{ marginTop: 30 }}>Activar o desactivar dispositivos</Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            flexGrow: 1,
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 120,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Alarma</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            flexGrow: 1,
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 120,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Ventilador</Text>
          </>
        </Link>
      </View>
      <Text style={{ marginTop: 10 }}>Abrir o cerrar puertas</Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            flexGrow: 1,
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 120,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Puerta principal</Text>
          </>
        </Link>
      </View>
      <Text style={{ marginTop: 10 }}>Encender o apagar luces</Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Habitacion</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            maxWidth: 80,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Baño</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Cocina</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Sala</Text>
          </>
        </Link>
      </View>
    </View>
  )
}
