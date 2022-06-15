import { StyleSheet, Text, TextInput, View } from 'react-native'
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
      <View style={style.containerLoader}>
        <Text>Cargando...</Text>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <View style={style.containerInputs}>
        <Text>Usuario*</Text>
        <TextInput
          autoComplete="email"
          onChangeText={setEmail}
          placeholder="Ingrese un correo eléctronico"
          style={style.input}
          textContentType="emailAddress"
          value={email}
        />
        <Text>Contraseña*</Text>
        <TextInput
          onChangeText={setPassword}
          placeholder="Ingrese una contraseña"
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
    marginBottom: 50,
  },
  containerLoader: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  input: {
    borderColor: '#093D9E',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
})
