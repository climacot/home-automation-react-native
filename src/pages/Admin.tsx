import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import React from 'react'
import useAuth from '../hooks/useAuth'

export default function AdminPage() {
  const auth = useAuth()
  const user = auth.user

  BackHandlerExit()

  return (
    <ScrollView>
      <ImageBackground source={require('../public/wallpaper.png')}>
        <AuthStatus />
        <View style={styles.container}>
          <Text style={styles.title}>Panel de administración</Text>
          <Image style={styles.logo} source={{ uri: user?.photoURL }} />
        </View>
        <Text style={styles.font}>Nombre: {user?.displayName}</Text>
        <Text style={styles.font}>Identificación: {user?.id}</Text>
        <Text style={styles.font}>Cargo: {user?.rol}</Text>
        <Text style={styles.font}>Correo: {user?.email}</Text>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Opciones de usuario</Text>
        </View>

        <View style={styles.containerButtons}>
          <View style={styles.separator} />
          <View style={styles.separator} />
          <Button title="Modificar" />
          <View style={styles.separator} />
          <Button title="Eliminar" />
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Opciones de la aplicación</Text>
        </View>

        <View style={styles.containerButtons}>
          <Button title="Distancia de sensores de luz" />
          <View style={styles.separator} />
          <Button title="Distancia detección de alarma" />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 25,
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
    fontSize: 15,
  },
  divider: {
    padding: 10,
    backgroundColor: '#D8D8D8',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
  },
  separator: {
    marginBottom: 5,
  },
})
