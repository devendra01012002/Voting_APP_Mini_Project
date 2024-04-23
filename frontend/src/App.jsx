import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'


const App = () => {
  return (
    <React.Fragment>
        <Routes>
              <Route path='/' element={<HomePage/> } />   
        </Routes>
    </React.Fragment>
  )
}

export default App
