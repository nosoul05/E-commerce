import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
// import HomePage from '../../src/homepage.component';

const HatsPage = () => (

  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TestPage = () => (
<div>
  <h1>Test Page</h1>
</div>

);

function App() {
  return (
  <div>
    <Switch>
      <Route exact path='/E-commerce' component={HomePage} />
      <Route path='/E-commerce/hats' component={HatsPage} />
      <Route path='/testpage' component={TestPage}></Route>
    </Switch>
  </div>
  );
}

export default App;
