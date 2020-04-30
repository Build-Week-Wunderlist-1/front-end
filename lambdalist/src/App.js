import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListContextProvider from './ToDoListContext';

function App() {
  return (
    <Router>
      <ToDoListContextProvider>
        <div className="App">
          <header>
            {/* <NavBar /> */}
          </header>
          <div className="main">
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Login} />
            <Switch>
              <PrivateRoute exact path="/ToDoList" component={ToDoList} />
              <Route exact path="/ToDoForm" component={ToDoForm} />
            </Switch>
            <section className="section">
              <h1> Lambda List </h1>
            </section>
          </div>
        </div>

      </ToDoListContextProvider>
    </Router>
  );
}

export default App;
