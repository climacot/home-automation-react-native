import database from '@react-native-firebase/database'

export const createUserDefalt = async (uid, email, adress, id, displayName, phoneNumber) => {
  try {
    const reference = database().ref(`/usuarios/${uid}`)

    const user = await reference.set({
      cargo: 'usuario',
      correo: email,
      direccion: adress,
      foto: '',
      identificacion: id,
      nombre: displayName,
      telefono: phoneNumber,
    })

    return user
  } catch (error) {
    return null
  }
}
