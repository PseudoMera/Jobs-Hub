import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import Footer from './Components/Footer';
import Login from './Pages/LoginPage';
import {UserContext} from './Components/UserContext';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  return (
    
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser, password, setPassword, login, setLogin}}>
        <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/jobs" component={JobsPage}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
        <Footer/>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
