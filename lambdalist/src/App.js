import React from "react";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import particles from './particles.json';
import Styled from 'styled-components';

function App() {
  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles-js config loaded");
  });
  return (
    
      
      <div className="App">
      <div id="particles-js"></div>
      <script src="particles.js"></script>
      <script>
      {particlesJS.load('particles-js', particles, () => {
        console.log('particles.json loaded')
      })}
      </script>
        <SignUp />
        <Login />
      </div>
    
  );
}

export default App;
