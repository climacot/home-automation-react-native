import { NativeRouter, Route, Routes } from 'react-router-native'
import IndexPage from './pages/Index'
import React from 'react'
import LoginPage from './pages/Login'

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </NativeRouter>
  )
}

export default App
