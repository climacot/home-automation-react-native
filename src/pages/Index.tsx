import { Text, StyleSheet, View } from 'react-native'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../components/Link/Link'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import React from 'react'
import Title from '../components/title/Title'

export default function IndexPage() {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Title>Casa Domótica</Title>
          <View style={{ marginTop: 50 }}>
            <HomeAutomationLogo />
          </View>
        </View>
        <Text style={styles.paragraph}>
          Proyecto de domótica para controlar una vivienda utilizando Arduino, Firebase y React Native!
        </Text>
        <CustomLink title="Ir a inicio de sesión" to={'/login'} />
      </View>
    </BackgroundLayout>
  )
}

const styles = StyleSheet.create({
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
  paragraph: {
    color: '#000000',
    fontSize: 17,
  },
})
