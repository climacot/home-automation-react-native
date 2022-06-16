import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../components/Link/Link'
import React from 'react'
import RequireAuth from '../context/RequireAuth'
import SimpleDivider from '../components/Divider/Simple'
import Title from '../components/title/Title'
import useAuth from '../hooks/useAuth'
import UserAnonymousLogo from '../components/logos/UserAnonymous'

export default function UserPage() {
  const { session } = useAuth()

  BackHandlerExit()

  return (
    <RequireAuth>
      <BackgroundLayout>
        <ScrollView>
          <AuthStatus />
          <Title>Panel de usuario</Title>
          {/* {session?.photoURL && <UserImage source={{ uri: session?.photoURL }} />} */}
          {!session?.photoURL && <UserAnonymousLogo />}
          <Text style={style.font}>Nombre: {session?.displayName}</Text>
          <Text style={style.font}>Identificación: {session?.id}</Text>
          <Text style={style.font}>Cargo: {session?.role}</Text>
          <Text style={style.font}>Correo: {session?.email}</Text>
          <SimpleDivider>Opciones</SimpleDivider>
          <View style={style.containerButtons}>
            <CustomLink to={'/'}>Modo manual</CustomLink>
            <CustomLink to={'/'}>Modo automatico</CustomLink>
          </View>
        </ScrollView>
      </BackgroundLayout>
    </RequireAuth>
  )
}

const style = StyleSheet.create({
  font: {
    color: '#000000',
    fontSize: 17,
  },
  containerButtons: {
    flex: 1,
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
