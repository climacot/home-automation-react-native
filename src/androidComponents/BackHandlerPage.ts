import { BackHandler } from 'react-native'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

export const BackHandlerPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const backAction = () => {
      navigate(-1)
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [])
}
