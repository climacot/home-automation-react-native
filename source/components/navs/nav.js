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
      <Link underlayColor={'#F8F8F8'} to={home} style={{ padding: 10 }}>
        <Image
          style={{ height: 25, width: 25 }}
          source={pathname === home ? require('../../assets/home_click.png') : require('../../assets/home.png')}
        />
      </Link>
      <Link underlayColor={'#F8F8F8'} to={'/profile'} style={{ padding: 10 }}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/control.png')} />
      </Link>
      <Link underlayColor={'#F8F8F8'} to={'/profile'} style={{ padding: 10 }}>
        <Image
          style={{ height: 25, width: 25 }}
          source={
            pathname === '/profile' ? require('../../assets/profile_click.png') : require('../../assets/profile.png')
          }
        />
      </Link>
    </View>
  )
}
