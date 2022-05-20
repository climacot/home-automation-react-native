import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { Image, ImageBackground, ImageURISource, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import Button from '../components/Button'
import database from '@react-native-firebase/database'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function CreateUser() {
  const [displayName, setDisplayName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [adress, setAdress] = useState<string>('')
  const auths = useAuth()
  const user = auths.user

  const srcLogo: ImageURISource = require('../../src/public/user.png')

  BackHandlerPage()

  const clear = () => {
    setAdress('')
    setDisplayName('')
    setEmail('')
    setId('')
    setPassword('')
    setPhoneNumber('')
  }

  const handleSubmit = async () => {
    if (email.length > 0 && password.length > 0 && displayName.length > 0 && id.length > 0 && phoneNumber.length > 0) {
      try {
        const authPromise = await auth().createUserWithEmailAndPassword(email, password)
        const reference = await database().ref(`/usuarios/${authPromise.user.uid}`)
        reference.set({
          cargo: 'usuario',
          correo: email,
          direccion: adress,
          foto: '',
          identificacion: id,
          nombre: displayName,
          telefono: phoneNumber,
        })

        setError('Usuario creado con exito')
        clear()
      } catch (errorHandler: any) {
        setError(errorHandler.toString())
      }
    } else {
      setError('Todos los campos son obligatorios')
    }
  }

  return (
    <ImageBackground style={{ height: '100%' }} source={require('../public/wallpaper.png')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Registrar un usuario</Text>
          <Image style={styles.logo} source={srcLogo} />
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.textInputDetail}>Nombre de la persona *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDisplayName}
            value={displayName}
            placeholder="Ingresa el nombre"
            autoComplete="name"
            textContentType="name"
          />
          <Text style={styles.textInputDetail}>Identificación *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setId}
            value={id.replace(/[^0-9]/g, '')}
            placeholder="Ingresa una identificación"
            keyboardType="numeric"
          />
          <Text style={styles.textInputDetail}>Numero de teléfono *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber.replace(/[^0-9]/g, '')}
            placeholder="Ingresa el teléfono"
            textContentType="telephoneNumber"
            keyboardType="numeric"
          />
          <Text style={styles.textInputDetail}>Dirección *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAdress}
            value={adress}
            placeholder="Ingresa una dirección"
            textContentType="addressCity"
          />
        </View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Datos de inicio de sesión para el usuario</Text>
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.textInputDetail}>Correo eléctronico *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Ingresa el correo eléctronico"
            autoComplete="email"
            textContentType="emailAddress"
          />
          <Text style={styles.textInputDetail}>Contraseña *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Ingresa una contraseña"
            textContentType="password"
            secureTextEntry
          />
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          <View style={styles.containerButton}>
            <Button title="Registrar" onPress={handleSubmit}>
              <Text style={styles.titleButton}>Registrar</Text>
            </Button>
          </View>
        </View>
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
    marginTop: 30,
  },
  error: {
    color: '#FF0000',
  },
  containerButton: {
    marginVertical: 20,
  },
  containerInfo: {
    paddingHorizontal: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 50,
  },
  containerInputs: {
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: '#00C82A',
  },
  disable: {
    backgroundColor: '#FF3F3F',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000',
  },
  textInputDetail: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 9999,
  },
  font: {
    color: '#000',
    fontSize: 17,
  },
  divider: {
    padding: 10,
    backgroundColor: '#C5C5C5',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  separator: {
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
})
