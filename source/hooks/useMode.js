import { useContext } from 'react'
import { ModeContext } from '../context/modeProvider'

export default function useMode() {
  return useContext(ModeContext)
}
