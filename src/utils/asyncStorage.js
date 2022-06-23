import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async value => {
  try {
    if (value === null) {
      AsyncStorage.removeItem('@session')
      return
    }

    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@session', jsonValue)
  } catch (error) {
    console.log(error)
  }
}

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@session')
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.log(error)
    return null
  }
}
