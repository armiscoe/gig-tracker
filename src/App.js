import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

import ShowsList from './components/ShowsList'
import EditShow from './components/EditShow'
import CreateShow from './components/CreateShow'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ShowsList} />
      <Route path="/edit/:id" component={EditShow} />
      <Route path="/create" component={CreateShow} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
