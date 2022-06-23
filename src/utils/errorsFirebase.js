export const errorFirebaseAuth = (error, onError) => {
  const formatedError = error.toString()

  formatedError === 'Error: [auth/invalid-email] The email address is badly formatted.' &&
    onError('El correo ingresado no es valido')
  formatedError ===
    'Error: [auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.' &&
    onError('Usuario o contraseña no existe')
  formatedError === 'Error: [auth/wrong-password] The password is invalid or the user does not have a password.' &&
    onError('Usuario o contraseña no existe')
  formatedError ===
    'Error: [auth/too-many-requests] We have blocked all requests from this device due to unusual activity. Try again later. [ Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ]' &&
    onError('Varios intentos de sesión fallidos, intentalo mas tarde')
}
