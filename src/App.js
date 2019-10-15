import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Nav from "./Components/Nav"
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
