import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import UserDetails from './components/UserDetails';

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
