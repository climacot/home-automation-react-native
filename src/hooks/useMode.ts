import { useContext } from 'react'
import { ModeContext } from '../context/Mode'

export default function useMode() {
  return useContext(ModeContext)
}
