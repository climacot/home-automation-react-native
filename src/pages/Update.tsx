import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UpdatePage() {
  return (
    <ImageBackground style={{ height: '100%' }} source={require('../public/wallpaper.png')}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Modificar usuario</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  containerInfo: {
    paddingHorizontal: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 70,
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
    backgroundColor: '#C5C5C5',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  separator: {
    marginBottom: 5,
  },
})
