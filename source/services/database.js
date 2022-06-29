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

export const getDataSensors = async uid => {
  try {
    const db = await database().ref(`usuarios/${uid}/modo`).once('value')
    const { manual } = db.val()
    const { alarma, puerta, ventilador, bano, cocina, habitacion, sala } = manual

    return {
      manual: {
        alarm: alarma,
        door: puerta,
        fan: ventilador,
        bath: bano,
        kitchen: cocina,
        livingRoom: habitacion,
        room: sala
      },
      automatic: {
        alarm: alarma
      }
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getDataOnStateChange = (uid, onStateChange, onSucess) => {
  database()
    .ref(`usuarios/${uid}/modo`)
    .on('value', snapshot => {
      const { automatico, manual } = snapshot.val()
      const { alarma, puerta, ventilador, bano, cocina, habitacion, sala } = manual

      onStateChange({
        manual: {
          alarm: alarma,
          door: puerta,
          fan: ventilador,
          bath: bano,
          kitchen: cocina,
          livingRoom: habitacion,
          room: sala
        },
        automatic: {
          alarm: automatico.alarma
        }
      })

      onSucess()
    })
}

export const desuscribeOnStateChange = async uid => {
  database().ref(`usuarios/${uid}/modo`).off('value')
}

export const updateSensors = async (uid, data) => {
  try {
    const db = await database()
      .ref(`usuarios/${uid}/modo`)
      .update({
        automatico: {
          alarma: data.automatic.alarm
        },
        manual: {
          alarma: data.manual.alarm,
          cocina: data.manual.kitchen,
          habitacion: data.manual.room,
          sala: data.manual.livingRoom,
          puerta: data.manual.door,
          ventilador: data.manual.fan,
          bano: data.manual.bath
        }
      })
    console.log('data updated', db)
    return
  } catch (error) {
    console.log(error)
    return null
  }
}
