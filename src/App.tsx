import { NativeRouter, Route, Routes } from 'react-router-native'
import AdminPage from './pages/Admin'
import AuthProvider from './context/AuthProvider'
import CreateUser from './pages/Create'
import IndexPage from './pages/Index'
import LoginPage from './pages/Login'
import React from 'react'
import SearchUser from './pages/Search'
import UpdatePage from './pages/Update'
import UserPage from './pages/User'

const App = () => {
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
          <Route path={'/update'} element={<UpdatePage />} />
        </Routes>
      </NativeRouter>
    </AuthProvider>
  )
}

export default App
