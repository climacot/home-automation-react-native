import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../inputs/input'
import Button from '../buttons/button'
import useUser from '../../hooks/useUser'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useUser()

  const validateInputs = () => {
    const checkEmail = email.length <= 0
    const checkPasswor = password.length <= 0

    if (checkEmail || checkPasswor) {
      setError('Todos los campos son obligatorios')
      return false
    }

    return true
  }

  const handleClick = () => {
    const check = validateInputs()

    if (check) login({ username: email, password }, setError)
  }

  return (
    <View style={{ width: '100%' }}>
      <Input autoComplete="email" placeholder="correo" onChangeText={setEmail} value={email} />
      <Input secureTextEntry placeholder="contraseña" onChangeText={setPassword} value={password} />
      <Text style={{ marginBottom: 10 }}>{error}</Text>
      <Button onPress={handleClick}>
        <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Entrar</Text>
      </Button>
    </View>
  )
}
