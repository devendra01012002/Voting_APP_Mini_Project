import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/auth/SignUpPage'
import Sign2 from './components/auth/Sign2'
import LoginPage from './components/auth/LoginPage'
import Navbar from './components/partials/Navbar'
import Login2 from './components/auth/Login2'


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/">
          <Route path="signin" element={<Sign2/>} />
          <Route path="login" element={<Login2 />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}    

export default App
