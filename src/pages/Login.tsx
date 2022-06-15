import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { Dimensions, StyleSheet, View } from 'react-native'
import BackgroundLayout from '../components/layout/Background'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import LoginForm from '../components/Forms/Login'
import React from 'react'
import Title from '../components/title/Title'
import Auth from '../context/Auth'

const screenHeight = Dimensions.get('window').height

export default function LoginPage() {
  BackHandlerPage()

  return (
    <Auth>
      <BackgroundLayout>
        <View style={style.container}>
          <Title>Inicio de sesión</Title>
          <HomeAutomationLogo />
          <LoginForm />
        </View>
      </BackgroundLayout>
    </Auth>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: screenHeight,
    justifyContent: 'space-around',
    padding: 5,
  },
})
