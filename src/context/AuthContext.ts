import { createContext } from 'react'
import { Isession } from '../Models/user'

interface AuthInterface {
  session: Isession | undefined | null
  logInWithEmailAndPassword: any
  signOut: any
}

export const AuthContext = createContext<AuthInterface>(null!)
