import React from 'react';
import logo from './logo.svg';
import './App.css';
import WomenList from './components/PlayerList'
import DarkMode from './components/Darkmode'
function App() {
  return (
    <div className="App">
      <h1>Women's Soccer World Cup</h1>
      <DarkMode/> 
      <WomenList/> 
    </div>
  );
}

export default App;
