import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Router } from "react-router-dom"
import LandingPage from './Component/LandingPage/LandingPage'
import Signup from './Component/Signup/Signup'
const App = () => {
  return (
   <BrowserRouter>
    <Router>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<Signup/>}/>
    </Router>
   </BrowserRouter>
  )
}

export default App