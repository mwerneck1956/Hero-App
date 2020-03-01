import React from 'react';
import logo from './logo.svg';
import MainNavbar from './components/MainNavbar'
import DialogStatistics from './components/DialogStatistics'





import {
  HashRouter as Router,
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
      {  
      
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
      
      </Router> }
    
    </div>
  );
}

export default App;
