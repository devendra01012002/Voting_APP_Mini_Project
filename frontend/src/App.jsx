import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/auth/SignUpPage'
import LoginPage from './components/auth/LoginPage'


const App = () => {
  return (
    <React.Fragment>
        <Routes>
              <Route path='/' element={<HomePage/> } />   
              <Route path='/user/signup' element={<SignUpPage/>}  />   
              <Route path='/user/login' element={<LoginPage/> } />   
        </Routes>
    </React.Fragment>
  )
}    

export default App
