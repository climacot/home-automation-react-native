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
      <ScrollView keyboardShouldPersistTaps="handled">
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
