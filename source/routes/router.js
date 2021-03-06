import { NativeRouter, Route, Routes } from 'react-router-native'
import AdminPage from '../pages/admin'
import IndexPage from '../pages'
import LoginPage from '../pages/login'
import PrivateRouter from './privateRouter'
import ProfilePage from '../pages/profile'
import PublicRouter from './publicRouter'
import React from 'react'
import UserPage from '../pages/user'
import UserProvider from '../context/userProvider'
import ModeProvider from '../context/modeProvider'
import SensorsProvider from '../context/sensorsProvider'

export default function AppRouter() {
  return (
    <UserProvider>
      <NativeRouter>
        <Routes>
          {/* <Route index path={'/'} element={<UserPage />} />
          <Route path={'/admin'} element={<AdminPage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/login'} element={<LoginPage />} /> */}
          <Route
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
                <ModeProvider>
                  <SensorsProvider>
                    <UserPage />
                  </SensorsProvider>
                </ModeProvider>
              </PrivateRouter>
            }
          />
          <Route
            path={'/profile'}
            element={
              <PrivateRouter>
                <ModeProvider>
                  <SensorsProvider>
                    <ProfilePage />
                  </SensorsProvider>
                </ModeProvider>
              </PrivateRouter>
            }
          />
        </Routes>
      </NativeRouter>
    </UserProvider>
  )
}
