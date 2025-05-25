import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}   />
    <Route path='/auth/login' element={<Login/>}   />
    <Route path='/auth/register' element={<Register/>}   />
   </Routes>
   <Footer/>
   </BrowserRouter>
 
   
    </>
  )
}

export default App