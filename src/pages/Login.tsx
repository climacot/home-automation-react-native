import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/Forms/Login'
import React from 'react'
import ScrollViewCustom from '../components/layout/ScrollView'
import Auth from '../context/Auth'

const screenHeight = Dimensions.get('window').height

export default function LoginPage() {
  const srcUnicauca = require('../public/unicauca.jpg')

  BackHandlerPage()

  return (
    <Auth>
      <ScrollViewCustom>
        <View style={style.container}>
          <View style={{ width: '100%', display: 'flex', alignItems: 'center', paddingTop: 100 }}>
            <Text style={{ fontSize: 30, color: '#000000', lineHeight: 70 }}>Hola de nuevo!</Text>
            <Text style={{ fontSize: 20, color: '#787878' }}>Bienvenido de vuelta</Text>
            <Text style={{ fontSize: 20, color: '#787878', paddingBottom: 50 }}>te hemos extrañado</Text>
            <LoginForm />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ justifyContent: 'flex-end', marginRight: 10 }}>Proyecto creado para Unicauca</Text>
            <Image style={{ height: 30, width: 30, borderRadius: 9999 }} source={srcUnicauca} />
          </View>
        </View>
      </ScrollViewCustom>
    </Auth>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#edf2f8',
    display: 'flex',
    flex: 1,
    height: screenHeight,
    justifyContent: 'space-between',
    padding: 5,
  },
})
