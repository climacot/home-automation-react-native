import { Navigate, useLocation } from 'react-router-native'
import { View } from 'react-native'
import React, { ReactNode } from 'react'
import useAuth from '../hooks/useAuth'

type ComponentProps = {
  children: ReactNode
}

export default function RequireAuth({ children }: ComponentProps) {
  const location = useLocation()
  const { session } = useAuth()

  if (!session) return <Navigate to="/" state={{ from: location }} replace />

  return <View>{children}</View>
}
