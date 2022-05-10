import { Alert } from 'react-native'
import { AuthContext } from './AuthContext'
import { userInfoDecorator } from '../decorators/userInfoDecorator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import React, { ReactNode, useEffect, useState } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function AuthProvider({ children }: ComponentProps) {
  const [user, setUser] = useState<FirebaseAuthTypes.UserInfo | null>(null)

  useEffect(() => {
    getData().then((userPromise: FirebaseAuthTypes.UserInfo | null) => {
      if (!userPromise) setUser(null)
      setUser(userPromise)
    })
  }, [])

  const signIn = (email: string, password: string, callback: Function) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(userPromise => {
        const userInfo = userInfoDecorator(userPromise.user)
        setUser(userInfo)
        storeData(userInfo)
        callback()
      })
      .catch(() => Alert.alert('No existe ni el usuario ni la contraseña 😒😒'))
  }

  const signOut = (callback: Function) => {
    return auth()
      .signOut()
      .then(() => {
        setUser(null)
        storeData(null)
        callback()
      })
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const storeData = async (value: FirebaseAuthTypes.UserInfo | null) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@statususer', jsonValue)
  } catch (e) {}
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@statususer')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {}
}
