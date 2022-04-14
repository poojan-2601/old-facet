import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import ProjectsContainer from './Containers/ProjectContainer';
import SignupContainer from './Containers/SignUpContainer';
import PrivateRoutes from './PrivateRoutes';
import './App.css'

const App = () => {
  return (
    <div className='App bg-light'>
      <Header />
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<HomeContainer />} />
          <Route path="/project/:projSlug" element={<><ProjectsContainer/></>} />
          <Route path="/project/:projSlug/:tab" element= {<ProjectsContainer/>} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<SignupContainer />} />
      </Routes>
    </div>
  )
}

export default App;