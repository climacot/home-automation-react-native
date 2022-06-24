import { useContext } from 'react'
import { UserContext } from '../context/userProvider'

export default function useUser() {
  return useContext(UserContext)
}
