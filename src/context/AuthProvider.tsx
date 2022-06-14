import { AuthContext } from './AuthContext'
import React, { ReactNode, useState } from 'react'
import auth from '@react-native-firebase/auth'

type ComponentProps = {
  children: ReactNode
}
interface credentials {
  username: string
  password: string
}

interface Isession {
  displayName: string | null
  email: string | null
  phoneNumber: string | null
  uid: string
  photoURL: string | null
}

export default function AuthProvider({ children }: ComponentProps) {
  const [session, setSession] = useState<Isession>()

  const logInWithEmailAndPassword = async (credentials: credentials) => {
    try {
      const { username, password } = credentials
      const credential = await auth().signInWithEmailAndPassword(username, password)
      const { user } = credential
      const { displayName, email, phoneNumber, uid, photoURL } = user

      setSession({
        displayName,
        email,
        phoneNumber,
        uid,
        photoURL,
      })
    } catch (error) {
      console.log(error)
      setSession(undefined)
    }
  }

  return <AuthContext.Provider value={{ session, logInWithEmailAndPassword }}>{children}</AuthContext.Provider>
}

// const storeData = async (value: IUserInfo | null) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem('@statususer', jsonValue)
//   } catch (e) {}
// }

// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@statususer')
//     return jsonValue != null ? JSON.parse(jsonValue) : null
//   } catch (e) {}
// }

// const signIn = async (emailp: string, passwordp: string, callback: Function, callbackError: Function) => {
//   try {
//     const credential = await auth().signInWithEmailAndPassword(emailp, passwordp)
//     const userCredential = credential
//     const { uid, email } = userCredential.user
//     const db = await database().ref(`usuarios/${uid}`).once('value')
//     const { nombre, identificacion, foto, cargo, telefono } = db.val()

//     const userInfo = {
//       displayName: nombre,
//       email,
//       id: identificacion,
//       phoneNumber: telefono,
//       photoURL: foto,
//       rol: cargo,
//       uid,
//     }

//     setUser(userInfo)
//     storeData(userInfo)

//     // cargo === 'administrador' ? navigate('/admin', { replace: true }) : navigate('/user', { replace: true })

//     callback()

//     return cargo
//   } catch (error) {
//     callbackError()
//     return null
//   }
// }
