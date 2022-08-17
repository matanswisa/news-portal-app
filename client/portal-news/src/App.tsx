import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './components/LandingPage';
import AppNavbar from './components/Navbar';

function App() {
  return (
    <>
      <AppNavbar />
      <LandingPage />
    </>
  );
}

export default App;
