import { Alert, BackHandler } from 'react-native'
import { useEffect } from 'react'

export const BackHandlerExit = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hola', 'Seguro quieres salir de aplicación?', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Salir', onPress: () => BackHandler.exitApp() },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => backHandler.remove()
  }, [])
}
