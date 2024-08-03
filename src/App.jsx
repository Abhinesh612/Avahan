import { Outlet } from 'react-router-dom'

import Navbar from './pages/components/Navbar'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
