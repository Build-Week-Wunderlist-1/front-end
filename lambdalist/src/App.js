import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ToDoList from "./Components/ToDoList";

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
        <Switch>
          <PrivateRoute exact path="/todolist" component={ToDoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
