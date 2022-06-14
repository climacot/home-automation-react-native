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
import BackgroundLayout from '../components/layout/Background'
import Title from '../components/title/Title'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import CustomLink from '../components/Link/Link'

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
    <BackgroundLayout>
      <View style={style.container}>
        <View style={style.containerLogo}>
          <Title>Inicio de sesión</Title>
          <View style={{ marginTop: 50 }}>
            <HomeAutomationLogo />
          </View>
        </View>
        <View style={style.containerInputs}>
          <Text>Usuario</Text>
          <TextInput
            autoComplete="email"
            onChangeText={setEmail}
            placeholder="Ingrese un correo eléctronico"
            style={style.input}
            textContentType="emailAddress"
            value={email}
          />
          <Text>Contraseña</Text>
          <TextInput
            onChangeText={setPassword}
            placeholder="Ingrese una contraseña"
            secureTextEntry
            style={style.input}
            textContentType="password"
            value={password}
          />
        </View>
        <CustomLink to={'/'} title={'Iniciar Sesión'} />
      </View>
    </BackgroundLayout>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  containerInputs: {
    width: '100%',
  },
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#093D9E',
    fontSize: 17,
  },
})
