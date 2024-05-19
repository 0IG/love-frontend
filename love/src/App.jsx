import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'


import {Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}
