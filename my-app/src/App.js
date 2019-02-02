import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Button} from 'react';
import Login from './login';

class App extends Component {
  render() {
    return (
	  <div>
		<div class = "navbar">
			<a href ="#home">Home</a>
			<a href="#news">Contacts</a>
		</div>
			<h1>Phonebook made with Node and React!</h1>
		<Login/>
	  </div>
	  
	  
    );
  }
}

export default App;
