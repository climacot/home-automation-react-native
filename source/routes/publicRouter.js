import { View } from 'react-native'
import React, { useState } from 'react'
import useUser from '../hooks/useUser'
import { Navigate } from 'react-router-native'

export default function PublicRouter({ children }) {
  const { user } = useUser()

  if (user && user.rol === 'administrador') return <Navigate to={'/admin'} />
  if (user && user.rol === 'usuario') return <Navigate to={'/user'} />

  return children
}
