import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import ToDoListContextProvider from './ToDoListContext';

function App() {
	return (
		<Router>
			<ToDoListContextProvider>
				<div className="App">
					<div className="container">
						<div className="app-wrapper">
							<header>
								<NavBar />
							</header>
							<div className="main">
								<SignUp />
								<Login />

								<Switch>
									<PrivateRoute exact path="/ToDoList" component={ToDoList} />
									<PrivateRoute exact path="/ToDoForm" component={ToDoForm} />
								</Switch>

								<section className="section">
									<h1> Lambda List </h1>
								</section>
							</div>
						</div>
					</div>
				</div>
			</ToDoListContextProvider>
		</Router>
	);
}

export default App;
