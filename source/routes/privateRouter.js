import { Navigate } from 'react-router-native'
import React from 'react'
import useUser from '../hooks/useUser'

export default function PrivateRouter({ children }) {
  const { user } = useUser()

  if (!user) return <Navigate to={'/login'} />

  return children
}
