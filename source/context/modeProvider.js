import React, { createContext, useEffect, useState } from 'react'
import { getData, storeData } from '../utils/asyncStorage'

export const ModeContext = createContext()

export const modes = {
  manual: true,
  automatic: false
}

export default function ModeProvider({ children }) {
  const [mode, setMode] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    getData('@mode').then(mode => {
      setMode(mode)
      setLoad(true)
    })
  }, [])

  const changeMode = () => {
    storeData(!mode, '@mode')
    setMode(!mode)
  }

  return <ModeContext.Provider value={{ mode, load, changeMode }}>{children}</ModeContext.Provider>
}
