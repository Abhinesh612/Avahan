import { Outlet } from 'react-router-dom'
import {useEffect} from "react";
import Navbar from './pages/components/Navbar3'
import Footer from './pages/components/Footer'
import './App.css'
import ScrollToTop from './ScrollToTop';


function App() {


  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet />
      <Footer/>

    </>
  )
}

export default App
