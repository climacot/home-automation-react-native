import { Image, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import React from 'react'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      }}>
      <Link style={{ padding: 10, borderBottomWidth: pathname === '/' && 3, borderColor: '#0496ff' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/home.png')} />
      </Link>
      <Link style={{ padding: 10, backgroundColor: pathname === '/config' && '#FFF' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/control.png')} />
      </Link>
      <Link style={{ padding: 10, backgroundColor: pathname === '/profile' && '#FFF' }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/profile.png')} />
      </Link>
    </View>
  )
}
