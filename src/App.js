import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderBar from './components/Main/Header-Bar.component';


import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
        <HeaderBar/>
        <HomePage/>
      
    </div>
  );
}

export default App;
