import { createUserDefalt } from '../../firebase/realtime'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import Button from '../Buttons/Button'
import React, { useState } from 'react'
import SimpleDivider from '../Divider/Simple'

export default function CreateForm() {
  const [adress, setAdress] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      displayName.length === 0 ||
      id.length === 0 ||
      phoneNumber.length === 0
    ) {
      setMessage('Todos los campos son obligatorios')
      return
    }

    try {
      const userAuth = await auth().createUserWithEmailAndPassword(email, password)
      await userAuth.user.updateProfile({ displayName })
      const create = createUserDefalt(userAuth.user.uid, email, adress, id, displayName, phoneNumber)
      if (!create) return
      setMessage('Usuario creado con exito')
      clearInputs()
    } catch (error: any) {
      setMessage(error.toString())
    }
  }

  const clearInputs = () => {
    setAdress('')
    setDisplayName('')
    setEmail('')
    setId('')
    setPassword('')
    setPhoneNumber('')
  }

  return (
    <View>
      <View style={styles.containerInputs}>
        <Text>Nombre de la persona*</Text>
        <TextInput
          autoComplete="name"
          onChangeText={setDisplayName}
          placeholder="Ingresa el nombre del usuario"
          style={styles.input}
          textContentType="name"
          value={displayName}
        />
        <Text>Identificación*</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={setId}
          placeholder="Ingresa la identificación del usuario"
          style={styles.input}
          value={id.replace(/[^0-9]/g, '')}
        />
        <Text>Numero de teléfono*</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={setPhoneNumber}
          placeholder="Ingresa el teléfono del usuario"
          style={styles.input}
          textContentType="telephoneNumber"
          value={phoneNumber.replace(/[^0-9]/g, '')}
        />
        <Text>Dirección*</Text>
        <TextInput
          onChangeText={setAdress}
          placeholder="Ingresa la dirección del usuario"
          style={styles.input}
          textContentType="addressCity"
          value={adress}
        />
      </View>
      <SimpleDivider>Datos de inicio de sesión para el usuario</SimpleDivider>
      <View style={styles.containerInputs}>
        <Text>Correo eléctronico*</Text>
        <TextInput
          autoComplete="email"
          onChangeText={setEmail}
          placeholder="Ingresa el correo eléctronico del usuario"
          style={styles.input}
          textContentType="emailAddress"
          value={email}
        />
        <Text>Contraseña*</Text>
        <TextInput
          onChangeText={setPassword}
          placeholder="Ingresa la contraseña del usuario"
          secureTextEntry
          style={styles.input}
          textContentType="password"
          value={password}
        />
        <Text>{message}</Text>
        <View style={{ marginVertical: 30 }}>
          <Button onPress={handleClick}>Registrar</Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#093D9E',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
  containerInputs: {
    padding: 5,
  },
})
