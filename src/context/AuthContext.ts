import { createContext } from 'react'
import { IUserInfo } from '../Models/user'

interface AuthContextType {
  user: IUserInfo | null
  signIn: (emailp: string, passwordp: string, callback: Function, callbackError: Function) => any | null
  signOut: (callback: Function) => void
}

export const AuthContext = createContext<AuthContextType>(null!)
