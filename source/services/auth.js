import auth from '@react-native-firebase/auth'
import { getDataUser } from './database'

export const onAuthStateChanged = callback => {
  return auth().onAuthStateChanged(callback)
}

export const loginWithEmailAndPassword = async credentials => {
  try {
    const { username, password } = credentials
    const userCredential = await auth().signInWithEmailAndPassword(username, password)
    const { user } = userCredential
    const { email, uid } = user
    const userData = await getDataUser(uid)

    return {
      email,
      uid,
      ...userData
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const signOut = async () => {
  try {
    await auth().signOut()
  } catch (error) {
    console.log(error)
  }
}
