import { NativeRouter, Route, Routes } from 'react-router-native'
import AdminPage from '../pages/admin'
import IndexPage from '../pages'
import LoginPage from '../pages/login'
import PrivateRouter from './privateRouter'
import PublicRouter from './publicRouter'
import React from 'react'
import UserPage from '../pages/user'
import UserProvider from '../context/userProvider'

export default function AppRouter() {
  return (
    <UserProvider>
      <NativeRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          {/* <Route
            index
            element={
              <PublicRouter>
                <IndexPage />
              </PublicRouter>
            }
          />
          <Route
            path={'/login'}
            element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path={'/admin'}
            element={
              <PrivateRouter>
                <AdminPage />
              </PrivateRouter>
            }
          />
          <Route
            path={'/user'}
            element={
              <PrivateRouter>
                <UserPage />
              </PrivateRouter>
            }
          /> */}
        </Routes>
      </NativeRouter>
    </UserProvider>
  )
}
