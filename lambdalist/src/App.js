import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
<<<<<<< HEAD
=======
// import particles from './particles.json';
// import Styled from 'styled-components';

>>>>>>> eb6406c71b25060972553a59e3360cdfad38856d
import ToDoForm from './Components/ToDoForm';
import Header from './Components/Header';
import ToDoList from "./Components/ToDoList"
import ToDoListContextProvider from "./ToDoListContext"

function App() {
  return (
<<<<<<< HEAD
    <ToDoListContextProvider>
      <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <header>
              <NavBar />
            </header>
            <div className="main">

              <Router>
                <Switch>
                  <PrivateRoute exact path="/todolist" component={ToDoList} />
                </Switch>
              </Router>

              <section className="section">
                <h1> Lambda List </h1>
              </section>

              <SignUp />
              <Login />
            </div>
          </div>
        </div>
      </div>
    </ToDoListContextProvider>
=======
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

>>>>>>> eb6406c71b25060972553a59e3360cdfad38856d
  );
}

export default App;
