import { AuthContext } from './AuthContext'
import { errorFirebaseAuth } from '../utils/errorsFirebase'
import { getData, storeData } from '../utils/asyncStorage'
import { Icredentials, Isession } from '../Models/user'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import React, { ReactNode, useEffect, useState } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function AuthProvider({ children }: ComponentProps) {
  const [session, setSession] = useState<Isession | null>()

  useEffect(() => {
    getData().then(sessionStore => {
      if (!sessionStore) {
        setSession(null)
        return
      }

      setSession(sessionStore)
    })
  }, [])

  const logInWithEmailAndPassword = async (credentials: Icredentials, onLoader: any, onError: any) => {
    try {
      const { username, password } = credentials
      const credential = await auth().signInWithEmailAndPassword(username, password)
      onLoader(true)
      const { user } = credential
      const { displayName, email, phoneNumber, uid, photoURL } = user
      const db = await database().ref(`usuarios/${uid}`).once('value')
      const { cargo, nombre, foto, identificacion } = db.val()
      onLoader(false)

      const userSession = {
        displayName: nombre,
        email,
        id: identificacion,
        phoneNumber,
        photoURL: foto,
        role: cargo,
        uid,
      }

      setSession(userSession)
      storeData(userSession)
    } catch (error) {
      errorFirebaseAuth(error, onError)
      onLoader(false)
      setSession(null)
      storeData(null)
    }
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      setSession(null)
      storeData(null)
    } catch (error) {
      setSession(null)
      storeData(null)
    }
  }

  return <AuthContext.Provider value={{ session, logInWithEmailAndPassword, signOut }}>{children}</AuthContext.Provider>
}
