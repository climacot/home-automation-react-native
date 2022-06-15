import { Text, StyleSheet, View } from 'react-native'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../components/Link/Link'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import React from 'react'
import Title from '../components/title/Title'
import Auth from '../context/Auth'

export default function IndexPage() {
  return (
    <Auth>
      <BackgroundLayout>
        <View style={styles.container}>
          <Title>Casa Domótica</Title>
          <HomeAutomationLogo />
          <Text style={styles.paragraph}>
            Proyecto de domótica para controlar una vivienda utilizando Arduino, Firebase y React Native!
          </Text>
          <CustomLink to={'/login'}>Ir a inicio de sesión</CustomLink>
        </View>
      </BackgroundLayout>
    </Auth>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  paragraph: {
    color: '#000000',
    fontSize: 17,
  },
})
