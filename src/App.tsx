import './index.css';
import './App.css'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Articles from './containers/Articles';
import User from './components/User';
import Home from './containers/Home';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/users' element={<User id={1} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;