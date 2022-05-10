import { Navigate, useLocation } from 'react-router-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

type ComponentProps = {
  children: JSX.Element
}

export default function Auth({ children }: ComponentProps) {
  const auth = useAuth()
  const location = useLocation()
  const user = auth.user

  if (!user) return children

  const { rol } = user

  if (rol === 'administrador') return <Navigate to="/admin" state={{ from: location }} replace />
  if (rol === 'usuario') return <Navigate to="/user" state={{ from: location }} replace />
  return children
}
