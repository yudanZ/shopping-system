import React from 'react';
import { 
  BrowserRouter as Router,
  Route , 
  Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const CollectionPage = () => (
  <div>
    <h1>collection page</h1>
  </div>
)

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/collection' component={CollectionPage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
