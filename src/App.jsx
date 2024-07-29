import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
