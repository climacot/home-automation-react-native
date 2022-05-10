import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackHandlerPage } from '../androidComponents/BackHandlerPage'

export default function SearchUser() {
  BackHandlerPage()

  return (
    <View>
      <ImageBackground source={require('../public/wallpaper.png')}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.title}>Registrar un usuario</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
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
    backgroundColor: '#D8D8D8',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
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
