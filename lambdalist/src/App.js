import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ToDoForm from './Components/ToDoForm';
import Header from './Components/Header';
import ToDoList from "./Components/ToDoList"
import ToDoListContextProvider from "./ToDoListContext"

function App() {
  return (
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
  );
}

export default App;
