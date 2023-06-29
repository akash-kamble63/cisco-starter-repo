import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer/>
    </div>
  );
}

export default App;
