import {
  Image,
  ImageBackground,
  ImageURISource,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-native'
import useAuth from '../hooks/useAuth'
import { BackHandlerPage } from '../androidComponents/BackHandlerPage'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const auth = useAuth()
  const navigate = useNavigate()

  // Propiedad android Api para ir hacia atras
  BackHandlerPage()

  const srcLogo: ImageURISource = require('../../src/public/logo.png')

  const handleSubmit = async () => {
    if (email.length === 0 || password.length === 0) {
      setError('Hay campos vacios, verifique por favor')
      return
    }

    const cargo = auth.signIn(
      email,
      password,
      () => {},
      () => setError('Hay un error en el usuario o contraseña'),
    )

    cargo.then((www: any) => {
      console.log(www)

      if (www === null) return

      www === 'administrador' ? navigate('/admin', { replace: true }) : navigate('/user', { replace: true })
    })
  }

  return (
    <ImageBackground style={{ height: '100%' }} source={require('../public/wallpaper.png')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Inicio de sesión</Text>
            <Image style={styles.logo} source={srcLogo} />
            <View style={styles.containerInputs}>
              <Text style={styles.textInputDetail}>Usuario</Text>
              <TextInput
                autoComplete="email"
                onChangeText={setEmail}
                placeholder="Ingrese un correo eléctronico"
                style={styles.input}
                textContentType="emailAddress"
                value={email}
              />
              <Text style={styles.textInputDetail}>Contraseña</Text>
              <TextInput
                onChangeText={setPassword}
                placeholder="Ingrese una contraseña"
                secureTextEntry
                style={styles.input}
                textContentType="password"
                value={password}
              />
              <View>
                <Text style={styles.error}>{error}</Text>
              </View>
              <View style={styles.containerButton}>
                <Button title="Iniciar Sesión" onPress={handleSubmit}>
                  <Text style={styles.titleButton}>Iniciar Sesión</Text>
                </Button>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  titleButton: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInputs: {
    display: 'flex',
    minWidth: 200,
    width: 300,
  },
  containerButton: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: '#093D9E',
    fontWeight: 'bold',
  },
  textInputDetail: {
    marginBottom: 5,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 50,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#093D9E',
    fontSize: 17,
  },
  error: {
    color: '#FF0000',
  },
})
