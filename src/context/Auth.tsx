import { Navigate, useLocation } from 'react-router-native'
import { View } from 'react-native'
import React, { ReactNode } from 'react'
import useAuth from '../hooks/useAuth'

type ComponentProps = {
  children: ReactNode
}

export default function Auth({ children }: ComponentProps) {
  const location = useLocation()
  const { session } = useAuth()
  const role = session?.role

  if (role === 'administrador') return <Navigate to="/admin" state={{ from: location }} replace />
  if (role === 'usuario') return <Navigate to="/user" state={{ from: location }} replace />
  if (session === undefined) return null

  return <View>{children}</View>
}
