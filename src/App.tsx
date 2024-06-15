import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App w-[100%] h-[100%] flex flex-col items-center overflow-x-hidden  bg-[#141414]">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
