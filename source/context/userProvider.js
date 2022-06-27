import { getDataUser } from '../services/database'
import { loginWithEmailAndPassword, onAuthStateChanged, signOut } from '../services/auth'
import React, { createContext, useEffect, useState } from 'react'
import LoaderPage from '../pages/loader'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const subscriber = onAuthStateChanged(onAuthStateChangedAndInitializing)
    return subscriber // unsubscribe on unmount
  }, [])

  const login = async (credentials, onSuccess, onError) => {
    const { username, password } = credentials
    const user = await loginWithEmailAndPassword({ username, password }, onError)
    if (!user) return
    onSuccess()
    setUser(user)
  }

  const singout = async () => {
    await signOut()
    setUser(null)
  }

  // Handle user state changes
  async function onAuthStateChangedAndInitializing(user) {
    if (!user) {
      setInitializing(false)
      return
    }

    const { uid, email } = user
    const { cargo, nombre, foto, identificacion } = await getDataUser(uid)

    setUser({
      email,
      uid,
      cargo,
      nombre,
      foto,
      identificacion
    })

    if (initializing) setInitializing(false)
  }

  if (initializing) return <LoaderPage />

  return <UserContext.Provider value={{ user, login, singout }}>{children}</UserContext.Provider>
}
