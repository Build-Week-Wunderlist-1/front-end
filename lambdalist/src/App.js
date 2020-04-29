import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ToDoList from "./Components/ToDoList";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
// import particles from './particles.json';
// import Styled from 'styled-components';

import ToDoForm from './Components/ToDoForm';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section className="section">
        <h1> Lambda List </h1>
      </section>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Switch>
          <PrivateRoute exact path="/todolist" component={ToDoList} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
