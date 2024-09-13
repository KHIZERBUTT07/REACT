import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Signup from './pages/signup'

function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
