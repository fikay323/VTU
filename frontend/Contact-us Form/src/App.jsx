import React from 'react'
import SignUp from "./SignUp/SignUp";
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;