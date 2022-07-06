import { desuscribeOnStateChange, getDataOnStateChange, getDataSensors, updateSensors } from '../services/database'
import { modes } from './modeProvider'
import React, { createContext, useEffect, useState } from 'react'
import useMode from '../hooks/useMode'
import useUser from '../hooks/useUser'

export const SensorsContext = createContext()

const init = {
  manual: {
    alarm: false,
    door: false,
    fan: false,
    bath: false,
    kitchen: false,
    livingRoom: false,
    room: false
  },
  automaic: {}
}

export default function SensorsProvider({ children }) {
  const [sensors, setSensors] = useState(init)
  const [load, setLoad] = useState(false)
  const { mode, stringMode } = useMode()
  const { user } = useUser()

  useEffect(() => {
    if (mode === modes.manual) {
      setLoad(false)
      desuscribeOnStateChange(user.uid)
      getDataSensors(user.uid).then(data => {
        setSensors(data)
        setLoad(true)
      })
    }

    if (mode === modes.automatic) {
      setLoad(false)
      getDataOnStateChange(user.uid, setSensors, () => setLoad(true))
    }
  }, [mode])

  const changeState = name => {
    const copy = JSON.parse(JSON.stringify(sensors))
    const actualState = copy[stringMode][name]
    copy[stringMode][name] = !actualState

    setSensors(copy)
    updateSensors(user.uid, copy)
  }

  const changeTemp = temp => {
    const copy = JSON.parse(JSON.stringify(sensors))
    copy['automatic']['fan']['limit'] = temp

    setSensors(copy)
    updateSensors(user.uid, copy)
  }

  // if (!load) return null

  return (
    <SensorsContext.Provider value={{ sensors, load, changeState, changeTemp }}>{children}</SensorsContext.Provider>
  )
}
