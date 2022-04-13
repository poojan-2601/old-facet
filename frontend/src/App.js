import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import SignupContainer from './Containers/SignUpContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<SignupContainer />} />
      </Routes>
    </div>
  )
}

export default App;