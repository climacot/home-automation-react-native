import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (value, name) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue)
  } catch (error) {
    console.log(error)
  }
}

export const getData = async name => {
  try {
    const jsonValue = await AsyncStorage.getItem(name)
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.log(error)
    return null
  }
}
