import { useContext } from 'react'
import { SensorsContext } from '../context/sensorsProvider'

export default function useSensors() {
  return useContext(SensorsContext)
}
