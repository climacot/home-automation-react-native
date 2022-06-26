import { Image, View } from 'react-native'
import { Link } from 'react-router-native'
import React from 'react'

export default function UserNav() {
  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      }}>
      <Link underlayColor={'#edf2f8'} to={'/user'} style={{ padding: 10 }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../public/home.png')} />
      </Link>
      <Link underlayColor={'#edf2f8'} to={'/user'} style={{ padding: 10 }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../public/control.png')} />
      </Link>
      <Link underlayColor={'#edf2f8'} to={'/profile'} style={{ padding: 10 }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../public/profile.png')} />
      </Link>
    </View>
  )
}
