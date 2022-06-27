import database from '@react-native-firebase/database'

export const getDataUser = async uid => {
  try {
    const db = await database().ref(`usuarios/${uid}`).once('value')
    const { cargo, nombre, foto, identificacion } = db.val()

    return {
      rol: cargo,
      name: nombre,
      photo: foto,
      id: identificacion
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
