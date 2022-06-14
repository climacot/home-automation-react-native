import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { StyleSheet, View } from 'react-native'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../components/Link/Link'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import LoginForm from '../components/Forms/Login'
import React from 'react'
import Title from '../components/title/Title'

export default function LoginPage() {
  // Propiedad android Api para ir hacia atras
  BackHandlerPage()

  return (
    <BackgroundLayout>
      <View style={style.container}>
        <View style={style.containerLogo}>
          <Title>Inicio de sesión</Title>
          <View style={{ marginTop: 50 }}>
            <HomeAutomationLogo />
          </View>
        </View>
        <LoginForm />
      </View>
    </BackgroundLayout>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
  },
})
