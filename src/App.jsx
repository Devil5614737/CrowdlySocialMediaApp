import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup';
import {Routes,Route} from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>

  )
}

export default App