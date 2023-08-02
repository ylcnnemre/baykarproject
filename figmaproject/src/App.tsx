import React from 'react'
import Header from './components/Header'
import FirstSection from './components/FirstSection'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<LandingPage/>}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App