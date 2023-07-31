import './index.css';
import './App.css'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Articles from './containers/Articles';
import User from './components/User';
import Home from './containers/Home';
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Statistics from './components/Statistics';
import QandA from './components/QandA';
import Settings from './components/Settings';

function App() {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID)}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/users' element={<User id={1} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/Q&A' element={<QandA />} />
          <Route path='/settings' element={<Settings />} />

        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;