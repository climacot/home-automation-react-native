import React, { createContext, useState } from 'react'

export const ModeContext = createContext()

export default function ModeProvider({ children }) {
  const [menu, setMenu] = useState(false)

  return <ModeContext.Provider value={{ menu, setMenu }}>{children}</ModeContext.Provider>
}
