import { AuthContext } from './AuthContext'
import { IUserInfo } from '../Models/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import React, { ReactNode, useEffect, useState } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function AuthProvider({ children }: ComponentProps) {
  const [user, setUser] = useState<IUserInfo | null>(null)
  // const navigate = useNavigate()

  useEffect(() => {
    getData()
      .then((userPromise: IUserInfo | null) => {
        if (!userPromise) {
          setUser(null)
        } else {
          setUser(userPromise)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const signIn = async (emailp: string, passwordp: string, callback: Function, callbackError: Function) => {
    try {
      const credential = await auth().signInWithEmailAndPassword(emailp, passwordp)
      const userCredential = credential
      const { uid, email } = userCredential.user
      const db = await database().ref(`usuarios/${uid}`).once('value')
      const { nombre, identificacion, foto, cargo, telefono } = db.val()

      const userInfo = {
        displayName: nombre,
        email,
        id: identificacion,
        phoneNumber: telefono,
        photoURL: foto,
        rol: cargo,
        uid,
      }

      setUser(userInfo)
      storeData(userInfo)

      // cargo === 'administrador' ? navigate('/admin', { replace: true }) : navigate('/user', { replace: true })

      callback()

      return cargo
    } catch (error) {
      callbackError()
      return null
    }
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

const storeData = async (value: IUserInfo | null) => {
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
