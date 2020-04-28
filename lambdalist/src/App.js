import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
		<div className="Container">
			<SignUp />
			<Login />
			<ToDoForm />
			<ToDoList />
		</div>
	);

export default App;
