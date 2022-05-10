import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ImageURISource,
} from 'react-native'
import ButtonLink from '../components/ButtonLink'
import React from 'react'

export default function IndexPage() {
  const srcLogo: ImageURISource = require('../../src/public/logo.png')
  const srcWallpaper: ImageURISource = require('../../src/public/wallpaper.png')

  return (
    <ImageBackground source={srcWallpaper} style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Casa Domótica</Text>
          <Image style={styles.logo} source={srcLogo} />
          <Text style={styles.text}>
            Proyecto de domótica para controlar una vivienda utilizando Arduino,
            Firebase y React Native!
          </Text>
          <View style={styles.containerButton}>
            <ButtonLink path="/login" title="Iniciar Sesión" />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  containerButton: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: '#093D9E',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 50,
  },
  text: {
    color: '#000',
    fontSize: 17,
  },
})
