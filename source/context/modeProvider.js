import React, { createContext, useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { updateMode } from '../services/database'
import { getData, storeData } from '../utils/asyncStorage'

export const ModeContext = createContext()

export const modes = {
  manual: true,
  automatic: false
}

export default function ModeProvider({ children }) {
  const { user } = useUser()
  const [mode, setMode] = useState(user.mode)
  // const [load, setLoad] = useState(false)

  // useEffect(() => {
  //   getData('@mode').then(mode => {
  //     setMode(mode)
  //     setLoad(true)
  //   })
  // }, [])

  const changeMode = () => {
    // storeData(!mode, '@mode')
    updateMode(user.uid, !mode)
    setMode(!mode)
  }

  const stringMode = mode ? 'manual' : 'automatic'

  // if (!load) return null

  return <ModeContext.Provider value={{ mode, stringMode, changeMode }}>{children}</ModeContext.Provider>
}
