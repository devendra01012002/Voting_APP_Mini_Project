import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUpPage from './components/auth/SignUpPage'
import LoginPage from './components/auth/LoginPage'
import Navbar from './components/partials/Navbar'
import Home from './components/Home/Home'


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/">
          <Route path="signup" element={<SignUpPage/>} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}    

export default App
