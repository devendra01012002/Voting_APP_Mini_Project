import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import SignUpPage from './components/auth/SignUpPage'
import SignUp2 from './components/auth/Sign2'
import LoginPage from './components/auth/Login2'
import Navbar from './components/partials/Navbar'
import Home from "./components/Home/Home"

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
          <Route path="logout" element={<LoginPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}    

export default App
