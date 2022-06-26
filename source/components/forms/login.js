import { TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../inputs/input'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="correo" onChangeText={setEmail} value={email} />
      <Input placeholder="contraseña" onChangeText={setPassword} value={password} />
    </View>
  )
}
