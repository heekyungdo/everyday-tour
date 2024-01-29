import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function Layout() {
  return (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
