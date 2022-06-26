import { View } from 'react-native'
import React, { useState } from 'react'
import useUser from '../hooks/useUser'
import { Navigate } from 'react-router-native'

export default function PublicRouter({ children }) {
  const { user } = useUser()

  if (user && user.cargo === 'administrador') return <Navigate to={'/admin'} />
  if (user && user.cargo === 'usuario') return <Navigate to={'/user'} />

  return children
}
