import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../Buttons/Button'
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loader, setLoader] = useState(false)
  const [password, setPassword] = useState('')
  const { logInWithEmailAndPassword } = useAuth()

  const handleClick = () => {
    if (email.length <= 0 || password.length <= 0) {
      setError('Todos los campos son obligatorios')
      return
    }

    logInWithEmailAndPassword({ username: email, password }, setLoader, setError)
  }

  if (loader) {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#edf2f8',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}>
        <Text style={{ fontSize: 15 }}>Domótica 🤍</Text>
        <Image style={{ marginTop: 200 }} source={require('../../public/loader.gif')} />
        <Text style={{ fontSize: 15 }}>Cargando la aplicación...</Text>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <View style={style.containerInputs}>
        <TextInput
          autoComplete="email"
          onChangeText={setEmail}
          placeholder="Usuario"
          style={style.input}
          textContentType="emailAddress"
          value={email}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry
          style={style.input}
          textContentType="password"
          value={password}
        />
        <Text>{error}</Text>
      </View>
      <Button onPress={handleClick}>Iniciar sesión</Button>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerInputs: {
    marginBottom: 10,
  },
  containerLoader: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  input: {
    borderRadius: 5,
    borderWidth: 0,
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
})
