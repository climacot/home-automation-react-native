import { NativeRouter, Route, Routes } from 'react-router-native'
import { routes } from './context/routes'
import AdminPage from './pages/Admin'
import Auth from './context/Auth'
import AuthProvider from './context/AuthProvider'
import IndexPage from './pages/Index'
import LoginPage from './pages/Login'
import React from 'react'
import RequireAuth from './context/RequireAuth'
import UserPage from './pages/User'

const App = () => {
  return (
    <AuthProvider>
      <NativeRouter>
        <Routes>
          <Route index element={LoginPublicPage} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.user} element={UserProtectedPage} />
          <Route path={routes.admin} element={AdminProtectedPage} />
        </Routes>
      </NativeRouter>
    </AuthProvider>
  )
}

export default App

const AdminProtectedPage = (
  <RequireAuth>
    <AdminPage />
  </RequireAuth>
)

const UserProtectedPage = (
  <RequireAuth>
    <UserPage />
  </RequireAuth>
)

const LoginPublicPage = (
  <Auth>
    <IndexPage />
  </Auth>
)
