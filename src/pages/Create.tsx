import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { ScrollView, StyleSheet, View } from 'react-native'
import BackgroundLayout from '../components/layout/Background'
import CreateForm from '../components/Forms/Create'
import React from 'react'
import Title from '../components/title/Title'
import UserAnonymousLogo from '../components/logos/UserAnonymous'

export default function CreateUser() {
  BackHandlerPage()

  return (
    <BackgroundLayout>
      <ScrollView>
        <View style={style.container}>
          <Title>Registrar un usuario</Title>
          <UserAnonymousLogo />
          <CreateForm />
        </View>
      </ScrollView>
    </BackgroundLayout>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
})

// const clear = () => {
//   setAdress('')
//   setDisplayName('')
//   setEmail('')
//   setId('')
//   setPassword('')
//   setPhoneNumber('')
// }

// const handleSubmit = async () => {
//   if (email.length > 0 && password.length > 0 && displayName.length > 0 && id.length > 0 && phoneNumber.length > 0) {
//     try {
//       const authPromise = await auth().createUserWithEmailAndPassword(email, password)
//       const reference = await database().ref(`/usuarios/${authPromise.user.uid}`)
//       reference.set({
//         cargo: 'usuario',
//         correo: email,
//         direccion: adress,
//         foto: '',
//         identificacion: id,
//         nombre: displayName,
//         telefono: phoneNumber,
//       })

//       setError('Usuario creado con exito')
//       clear()
//     } catch (errorHandler: any) {
//       setError(errorHandler.toString())
//     }
//   } else {
//     setError('Todos los campos son obligatorios')
//   }
// }
