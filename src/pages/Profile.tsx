import { Image, StyleSheet, Text, Touchable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'
import UserImage from '../components/user/Image'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import useAuth from '../hooks/useAuth'
import RequireAuth from '../context/RequireAuth'

export default function ProfilePage() {
  const { session, signOut } = useAuth()
  return (
    <RequireAuth>
      <View style={{ backgroundColor: '#edf2f8', display: 'flex', height: '100%', justifyContent: 'space-between' }}>
        <View style={{ marginTop: 100 }}>
          {session?.photoURL && <UserImage source={{ uri: session?.photoURL }} />}
          {!session?.photoURL && <HomeAutomationLogo />}
        </View>
        <View style={{ marginVertical: 50, padding: 20 }}>
          <Text style={styles.font}>Nombre: {session?.displayName}</Text>
          <Text style={styles.font}>Identificación: {session?.id}</Text>
          <Text style={styles.font}>Cargo: {session?.role}</Text>
          <Text style={styles.font}>Correo: {session?.email}</Text>
        </View>
        <View style={{ padding: 20 }}>
          <TouchableHighlight
            onPress={() => signOut()}
            style={{ backgroundColor: '#0496ff', borderRadius: 15, padding: 15, width: '100%' }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: '#FFFFFF' }}>Cerrar sesión</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Link underlayColor={'#edf2f8'} to={'/admin'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/home.png')} />
          </Link>
          <Link underlayColor={'#edf2f8'} to={'/admin'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/control.png')} />
          </Link>
          <Link underlayColor={'#edf2f8'} to={'/admin'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/profile.png')} />
          </Link>
        </View>
      </View>
    </RequireAuth>
  )
}

const styles = StyleSheet.create({
  containerButtons: {
    flex: 1,
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  font: {
    color: '#000000',
    fontSize: 17,
  },
})
