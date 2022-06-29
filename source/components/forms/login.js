import { Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../inputs/input'
import Button from '../buttons/button'
import useUser from '../../hooks/useUser'
import LoaderPage from '../../pages/loader'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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

    if (check) {
      setLoading(true)

      login(
        { username: email, password },
        () => setLoading(false),
        error => {
          setError(error)
          setLoading(false)
        }
      )
    }
  }

  const Loader = (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 50, height: 50 }} source={require('../../assets/loader_without_background.gif')} />
    </View>
  )

  const Component = (
    <View style={{ width: '100%' }}>
      <Text>Puedes iniciar sesión</Text>
      <Input autoComplete="email" placeholder="correo" onChangeText={setEmail} value={email} />
      <Input secureTextEntry placeholder="contraseña" onChangeText={setPassword} value={password} />
      <Text style={{ marginBottom: 10 }}>{error}</Text>
      <Button onPress={handleClick}>
        <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Entrar</Text>
      </Button>
    </View>
  )

  return <>{loading ? Loader : Component}</>
}
