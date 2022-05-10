import { Navigate, useLocation } from 'react-router-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

type ComponentProps = {
  children: JSX.Element
}

export default function Auth({ children }: ComponentProps) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user) {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }

  return children
}
