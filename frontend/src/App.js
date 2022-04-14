import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import ProjectsContainer from './Containers/ProjectContainer';
import SignupContainer from './Containers/SignUpContainer';
import PrivateRoutes from './PrivateRoutes';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
<<<<<<< HEAD
          <Route path="/dashboard" element={<HomeContainer />} />
          <Route path="/project/:projSlug" element={<></>} />
=======
          <Route path="/" element={<HomeContainer />} />
          <Route path="/project/:projSlug" element={<><ProjectsContainer/></>} />
          <Route path="/project/:projSlug/:tab" element= {<ProjectsContainer/>} />
>>>>>>> 47d90a1342553441e9af5998f5bf92e2cbf83f4b
        </Route>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<SignupContainer />} />
      </Routes>
    </div>
  )
}

export default App;