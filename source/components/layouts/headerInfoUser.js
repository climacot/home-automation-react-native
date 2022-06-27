import { Text, View } from 'react-native'
import React from 'react'
import ModeButton from '../buttons/mode'
import useUser from '../../hooks/useUser'

export default function HeaderUserInfo() {
  const { user } = useUser()
  const e = 'Climaco Fernando Rodriguez Tovar'

  return (
    <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexGrow: 1, marginRight: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text numberOfLines={1} style={{ fontSize: 20, color: '#000000', flex: 1 }}>
            Hola {e}!
          </Text>
        </View>
        <Text>ID: 1083931167</Text>
      </View>
      {user.cargo === 'usuario' && <ModeButton />}
    </View>
  )
}
