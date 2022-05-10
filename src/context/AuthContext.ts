import { createContext } from 'react'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface AuthContextType {
  user: FirebaseAuthTypes.UserInfo | null
  signIn: (email: string, password: string, callback: Function) => void
  signOut: (callback: Function) => void
}

const initUserInfo = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
  tenantId: '',
  uid: '',
}

const initState = {
  user: initUserInfo,
  signIn: () => {},
  signOut: () => {},
}

export const AuthContext = createContext<AuthContextType>(initState)
