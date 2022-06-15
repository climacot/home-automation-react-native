import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../components/Link/Link'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import React from 'react'
import RequireAuth from '../context/RequireAuth'
import SimpleDivider from '../components/Divider/Simple'
import Title from '../components/title/Title'
import useAuth from '../hooks/useAuth'
import UserImage from '../components/user/Image'

export default function AdminPage() {
  const { session } = useAuth()

  BackHandlerExit()

  return (
    <RequireAuth>
      <BackgroundLayout>
        <ScrollView>
          <AuthStatus />
          <Title>Panel de administración</Title>
          {session?.photoURL && <UserImage source={{ uri: session?.photoURL }} />}
          {!session?.photoURL && <HomeAutomationLogo />}
          <Text style={styles.font}>Nombre: {session?.displayName}</Text>
          <Text style={styles.font}>Identificación: {session?.id}</Text>
          <Text style={styles.font}>Cargo: {session?.role}</Text>
          <Text style={styles.font}>Correo: {session?.email}</Text>
          <SimpleDivider>Opciones de usuario</SimpleDivider>
          <View style={styles.containerButtons}>
            <CustomLink to={'/create'}>Registrar</CustomLink>
            <CustomLink to={'/search'}>Consultar</CustomLink>
          </View>
          <SimpleDivider>Opciones de la aplicación</SimpleDivider>
          <View style={styles.containerButtons}>
            <CustomLink to={'/'}>Distancia de sensores de luz</CustomLink>
            <CustomLink to={'/'}>Distancia detección de alarma</CustomLink>
          </View>
          <SimpleDivider>Ayuda</SimpleDivider>
          <View style={styles.containerButtons}>
            <CustomLink to={'/'}>Guia de administrador</CustomLink>
            <CustomLink to={'/'}>PQRS</CustomLink>
          </View>
        </ScrollView>
      </BackgroundLayout>
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
