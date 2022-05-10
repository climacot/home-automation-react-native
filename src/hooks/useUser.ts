import { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useNavigate } from 'react-router-native'

export default function useUser() {
  const navigate = useNavigate()
  const [user, setUser] = useState<FirebaseAuthTypes.User>()

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        navigate('/admin')
      } else {
        setUser(undefined)
      }
    })

    return () => {
      subscriber
    }
  }, [])

  return {
    user,
    setUser,
  }
}
