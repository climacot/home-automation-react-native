import { Link } from 'react-router-native'
import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Auth from '../context/Auth'

export default function IndexPage() {
  const srcLogo = require('../public/logo5.png')

  return (
    <Auth>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', maxHeight: 350, width: '100%' }}>
          <Image resizeMode="cover" style={styles.logo} source={srcLogo} />
        </View>
        <View>
          <Text style={{ fontSize: 35, fontWeight: '700', textAlign: 'center', color: '#000000', lineHeight: 35 }}>
            Controla tu casa
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '700',
              textAlign: 'center',
              color: '#000000',
              lineHeight: 35,
              paddingBottom: 20,
            }}>
            en pocos pasos
          </Text>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#787878' }}>
            Proyecto de domótica para controlar una vivienda utilizando Arduino, Firebase y React Native!
          </Text>
        </View>
        <Link underlayColor={'#F7F7F7'} style={styles.link} to={'/login'}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#FFFFFF' }}>Siguiente</Text>
        </Link>
      </View>
    </Auth>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#edf2f8',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0049ad',
    borderRadius: 20,
  },
  link: {
    backgroundColor: '#0496ff',
    borderRadius: 15,
    padding: 15,
    width: '100%',
  },
})
