import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

import ToDoList from './components/ToDoList';
import ToDoListContextProvider from './ToDoListContext';
// import { ToDoListContext } from "./ToDoListContext"

function App() {
  return (
    <Router>

      <header />
      <div className="App">

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
          <ToDoListContextProvider>
            <PrivateRoute path="/ToDoList" component={ToDoList} />
          </ToDoListContextProvider>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
