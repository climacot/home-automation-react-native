import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export const userInfoDecorator = (
  user: FirebaseAuthTypes.User,
): FirebaseAuthTypes.UserInfo => {
  return {
    displayName: user.displayName || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',
    photoURL: user.photoURL || '',
    providerId: user.providerId,
    tenantId: '',
    uid: user.uid,
  }
}
