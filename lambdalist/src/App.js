import React from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import particles from './particles.json';
import Styled from 'styled-components';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';
import Header from './Components/Header';

function App() {
	return (
		<div className="App">
			<SignUp />
			<Login />
			<ToDoForm />
			<ToDoList />
		</div>
	);
}

export default App;
