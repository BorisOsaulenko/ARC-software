import './index.css';
import './App.css'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Articles from './containers/Articles';
import User from './components/User';
import Home from './containers/Home';
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from './AppRoutes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID)}
    >
      <BrowserRouter>
        <Sidebar />
        <AppRoutes/>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;