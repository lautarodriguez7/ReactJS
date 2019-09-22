import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='navbar navbar-dark bg-dark'>
          <a href='' className='text-white'>
            Tasks
          </a>
        </nav>
    </div>
  );
}

export default App;
