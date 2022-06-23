import { BackHandlerExit } from '../androidComponents/BackHandlerExit'
import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import RequireAuth from '../context/RequireAuth'
import useAuth from '../hooks/useAuth'
import useMode from '../hooks/useMode'
import UserMenu from '../newComponents/menus/user/manual'
import UserMenuAutomatic from '../newComponents/menus/user/automatico'
import UserNav from '../newComponents/navs/user'

export default function UserPage() {
  const { session } = useAuth()
  const { menu, setMenu } = useMode()

  BackHandlerExit()

  return (
    <RequireAuth>
      <View style={{ backgroundColor: '#edf2f8', display: 'flex', height: '100%', justifyContent: 'space-between' }}>
        <View style={{ padding: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 10, color: '#000000' }}>Hola {session?.displayName}!</Text>
              <Text>ID: {session?.id}</Text>
            </View>
            <TouchableHighlight
              onPress={() => setMenu(!menu)}
              style={{
                backgroundColor: '#0496ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              {menu ? <Text>Manual</Text> : <Text>Automatico</Text>}
            </TouchableHighlight>
          </View>
          {menu ? <UserMenu /> : <UserMenuAutomatic />}
        </View>
        <UserNav />
      </View>
    </RequireAuth>
  )
}
