import React from "react";
import "./App.css";
<<<<<<< HEAD
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ToDoList from "./Components/ToDoList";
=======
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import particles from './particles.json';
import Styled from 'styled-components';
>>>>>>> 5bf8514963a219f72b7a8601a3c7cebd2fb1a8f0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header>
        <NavBar />
      </header>
      <section className="section">
        <h1> Lambda List </h1>
      </section>
      <Router>
        <Switch>
          <PrivateRoute exact path="/todolist" component={ToDoList} />
        </Switch>
      </Router>
    </div>
=======
        <SignUp />
        <Login />
      </div>
    
>>>>>>> 5bf8514963a219f72b7a8601a3c7cebd2fb1a8f0
  );
}

export default App;
