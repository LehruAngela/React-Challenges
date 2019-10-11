import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Signup from './components/signup';
import UserDetails from './components/userDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/info' component={UserDetails} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
