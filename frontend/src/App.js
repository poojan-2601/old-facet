import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import LoginContainer from './Containers/LoginContainer';
import SignupContainer from './Containers/SignUpContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<SignupContainer />} />
      </Routes>
    </div>
  )
}

export default App;