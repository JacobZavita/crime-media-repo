import './App.css';
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import Landing from './pages/Landing'
import Results from './pages/Results'
import MediaPage from './pages/MediaPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Appbar from './components/Appbar'

function App() {
  return (
    <Router>
      <div className="App">
          <Appbar />
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/results'>
              <Results />
            </Route>
            <Route path='/media'>
              <MediaPage />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
