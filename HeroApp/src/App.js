import React from 'react';
import logo from './logo.svg';
import WelcomeBody from '../src/components/WelcomeBody'
import MainNavbar from './components/MainNavbar'
import ShowWindowDimension from './components/ShowWindowDimension'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
//Views
import WelcomePage from './views/WelcomePage'
import GameView from './views/GameView'
function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route exact path="/home">
            <WelcomePage />
          </Route>
          <Route path="/game">
            <GameView/>
          </Route>
          <Redirect from='/' to='/home' /> 
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
