import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
// import SignUpPage from './components/auth/SignUpPage'
import SignUp2 from './components/auth/SignUp2'
import LoginPage from './components/auth/LoginPage'
import Navbar from './components/partials/Navbar'


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/">
          {/* <Route path="signup" element={<SignUpPage/>} /> */}
          <Route path="signup" element={<SignUp2/>} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}    

export default App
