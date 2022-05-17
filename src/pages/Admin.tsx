import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import ButtonLink from '../components/ButtonLink'
import React from 'react'
import useAuth from '../hooks/useAuth'

export default function AdminPage() {
  const auth = useAuth()
  const user = auth.user

  BackHandlerExit()

  return (
    <ImageBackground source={require('../public/wallpaper.png')}>
      <ScrollView>
        <AuthStatus />
        <View style={styles.container}>
          <Text style={styles.title}>Panel de administración</Text>
          <Image style={styles.logo} source={{ uri: user?.photoURL }} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.font}>Nombre: {user?.displayName}</Text>
          <Text style={styles.font}>Identificación: {user?.id}</Text>
          <Text style={styles.font}>Cargo: {user?.rol}</Text>
          <Text style={styles.font}>Correo: {user?.email}</Text>
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Opciones de usuario</Text>
        </View>

        <View style={styles.containerButtons}>
          <ButtonLink title="Registrar" path="/create" />
          <View style={styles.separator} />
          <ButtonLink title="Consultar" path="/search" />
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Opciones de la aplicación</Text>
        </View>

        <View style={styles.containerButtons}>
          <ButtonLink title="Distancia de sensores de luz" path="/" />
          <View style={styles.separator} />
          <ButtonLink title="Distancia detección de alarma" path="/" />
          <View style={styles.separator} />
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Ayuda</Text>
        </View>
        <View style={styles.containerButtons}>
          <ButtonLink title="Preguntas frecuentes" path="/" />
          <View style={styles.separator} />
          <ButtonLink title="PQR" path="/" />
          <View style={styles.separator} />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  containerInfo: {
    paddingHorizontal: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 70,
  },
  active: {
    backgroundColor: '#00C82A',
  },
  disable: {
    backgroundColor: '#FF3F3F',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 9999,
  },
  font: {
    color: '#000',
    fontSize: 17,
  },
  divider: {
    padding: 10,
    backgroundColor: '#C5C5C5',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  separator: {
    marginBottom: 5,
  },
})
