import './index.css';
import './App.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from './AppRoutes';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <GoogleOAuthProvider
      clientId={String(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID)}
    >
      <BrowserRouter>
        {window.location.href !== "http://localhost:3000/login" && <Sidebar />}
        <AppRoutes/>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;