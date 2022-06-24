import { BackHandlerExit } from '../../source/components/androidComponents/BackHandlerExit'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import AuthStatus from '../context/AuthStatus'
import BackgroundLayout from '../components/layout/Background'
import CustomLink from '../../source/components/Link/Link'
import HomeAutomationLogo from '../components/logos/HomeAutomation'
import React from 'react'
import RequireAuth from '../context/RequireAuth'
import SimpleDivider from '../components/Divider/Simple'
import Title from '../components/title/Title'
import useAuth from '../hooks/useAuth'
import UserImage from '../components/user/Image'
import { Link } from 'react-router-native'

export default function AdminPage() {
  const { session } = useAuth()

  BackHandlerExit()

  return (
    <RequireAuth>
      <View style={{ backgroundColor: '#edf2f8', display: 'flex', height: '100%', justifyContent: 'space-between' }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, color: '#000000' }}>Hola {session?.displayName}!</Text>
          <Text>ID: {session?.id}</Text>
          <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
            <Link
              underlayColor={'#F7F7F7'}
              to={'/create'}
              style={{
                padding: 20,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                flexGrow: 1,
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 120
              }}>
              <>
                <Image style={{ height: 30, width: 30 }} source={require('../public/user.png')} />
                <Text>Registrar</Text>
              </>
            </Link>
            <Link
              underlayColor={'#F7F7F7'}
              to={'/search'}
              style={{
                padding: 20,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                flexGrow: 1,
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 120
              }}>
              <>
                <Image style={{ height: 30, width: 30 }} source={require('../public/search.png')} />
                <Text>Consultar</Text>
              </>
            </Link>
            <Link
              underlayColor={'#F7F7F7'}
              to={'/search'}
              style={{
                padding: 20,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                flexGrow: 1,
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 120
              }}>
              <>
                <Image style={{ height: 30, width: 30 }} source={require('../public/check.png')} />
                <Text>Editar</Text>
              </>
            </Link>
            <Link
              underlayColor={'#F7F7F7'}
              to={'/search'}
              style={{
                padding: 20,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                flexGrow: 1,
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 120
              }}>
              <>
                <Image style={{ height: 30, width: 30 }} source={require('../public/delete.png')} />
                <Text>Eliminar</Text>
              </>
            </Link>
          </View>
        </View>
        <Text style={{ textAlign: 'center' }}>Otras opciones</Text>
        <View style={styles.containerButtons}>
          <CustomLink to={'/'}>Guia de administrador</CustomLink>
          <CustomLink to={'/'}>PQRS</CustomLink>
        </View>
        <View
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
          }}>
          <Link underlayColor={'#edf2f8'} to={'/admin'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/home.png')} />
          </Link>
          <Link underlayColor={'#edf2f8'} to={'/admin'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/control.png')} />
          </Link>
          <Link underlayColor={'#edf2f8'} to={'/profile'} style={{ padding: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={require('../public/profile.png')} />
          </Link>
        </View>
      </View>
    </RequireAuth>
  )
}

const styles = StyleSheet.create({
  containerButtons: {
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  font: {
    color: '#000000',
    fontSize: 17
  }
})
