import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../Buttons/Button'
import React, { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {}

  return (
    <View style={style.container}>
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
