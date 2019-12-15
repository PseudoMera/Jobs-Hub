import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import Footer from './Components/Footer';

function App() {
  
  return (
    <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/jobs" component={JobsPage}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
