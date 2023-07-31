import React from 'react'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import FirstSection from './components/FirstSection'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/test' element={<HomePage/>}    />
          <Route  path='/' element={<LandingPage/>}  />
        </Routes>
    </BrowserRouter>

  )
}

export default App