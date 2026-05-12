import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import LayOut from './pages/LayOut'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element ={<LayOut/>}>
      <Route index element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='services' element ={<Services/>}/>
      <Route path='portfolio' element ={<Portfolio/>}/>
      <Route path='contact' element ={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App