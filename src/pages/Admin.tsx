import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import React from 'react'
import useAuth from '../hooks/useAuth'
import ButtonLink from '../components/ButtonLink'

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
          <ButtonLink title="Consultar" path="/read" />
          <View style={styles.separator} />
          <ButtonLink title="Modificar" path="/" />
          <View style={styles.separator} />
          <ButtonLink title="Eliminar" path="/" />
          <View style={styles.separator} />
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Estado de los componentes</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.font}>
            Estado de los sensores: <Text style={styles.active}>Activo</Text>
          </Text>
          <Text style={styles.font}>
            Estado de las luces: <Text style={styles.disable}>Desactivado</Text>
          </Text>
          <Text style={styles.font}>
            Estado de la calefacción: <Text style={styles.active}>Activo</Text>
          </Text>
          <Text style={styles.font}>Temperatura: 18° C</Text>
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
  containerInfo: {
    paddingHorizontal: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 50,
  },
  active: {
    backgroundColor: '#00C82A',
  },
  disable: {
    backgroundColor: '#FF3F3F',
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
  separator: {
    marginBottom: 5,
  },
})
