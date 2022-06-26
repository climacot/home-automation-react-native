import { getDataUser } from '../services/database'
import { loginWithEmailAndPassword, onAuthStateChanged, signOut } from '../services/auth'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const subscriber = onAuthStateChanged(onAuthStateChangedAndInitializing)
    return subscriber // unsubscribe on unmount
  }, [])

  const login = async credentials => {
    const { username, password } = credentials
    const user = await loginWithEmailAndPassword({ username, password })
    if (!user) return
    setUser(user)
  }

  const singout = async () => await signOut()

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

  if (initializing) return null

  return <UserContext.Provider value={{ user, login, singout }}>{children}</UserContext.Provider>
}
