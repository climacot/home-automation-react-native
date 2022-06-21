import { NativeRouter, Route, Routes } from 'react-router-native'
import AdminPage from './pages/Admin'
import AuthProvider from './context/AuthProvider'
import CreateUser from './pages/Create'
import IndexPage from './pages/Index'
import LoginPage from './pages/Login'
import React, { useState } from 'react'
import SearchUser from './pages/Search'
import UserPage from './pages/User'
import { Image, Text, View } from 'react-native'
import ProfilePage from './pages/Profile'

const App = () => {
  const [load, setLoad] = useState(true)
  const src = require('./public/loader.gif')

  if (load) {
    setTimeout(() => {
      setLoad(false)
    }, 2000)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>Domótica 🤍</Text>
        <Image source={src} />
        <Text style={{ fontSize: 15 }}>Cargando la aplicación...</Text>
      </View>
    )
  }

  return (
    <AuthProvider>
      <NativeRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/user'} element={<UserPage />} />
          <Route path={'/admin'} element={<AdminPage />} />
          <Route path={'/create'} element={<CreateUser />} />
          <Route path={'/search'} element={<SearchUser />} />
          <Route path={'/profile'} element={<ProfilePage />} />
        </Routes>
      </NativeRouter>
    </AuthProvider>
  )
}

export default App
