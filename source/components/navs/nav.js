import { Image, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import React from 'react'
import useUser from '../../hooks/useUser'

export default function Nav() {
  const { pathname } = useLocation()
  const { user } = useUser()

  const home = user.cargo === 'administrador' ? '/admin' : '/user'

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      }}>
      <Link to={home} style={{ padding: 10, borderBottomWidth: pathname === home ? 3 : 0, borderColor: '#0496ff' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/home.png')} />
      </Link>
      <Link
        to={'/profile'}
        style={{ padding: 10, borderBottomWidth: pathname === '/profile' ? 3 : 0, borderColor: '#0496ff' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/control.png')} />
      </Link>
      <Link
        to={'/profile'}
        style={{ padding: 10, borderBottomWidth: pathname === '/profile' ? 3 : 0, borderColor: '#0496ff' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/profile.png')} />
      </Link>
    </View>
  )
}
