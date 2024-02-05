import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function Layout() {
  return (
  <div>
    <Header />
    <Main>
      <Outlet />
    </Main>
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

const Main = styled.div`
  width:100%;
`
