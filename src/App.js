import React from 'react';
import  { Switch, Route, Link } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
// import HomePage from '../../src/homepage.component';

const HatsPage = () => (

  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsList = (props) => {
  console.log(props);
  return(
      <div>
        <h1>TOPIC LIST PAGE</h1>
      </div>
    );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
  <div>
    <h1>Topic Detail Page: {props.match.params.topicId} </h1>
  </div>

  );
};

function App() {
  return (
  <div>
    <Switch>
      <Route exact path='/E-commerce' component={HomePage} />
      <Route path='/E-commerce/hats' component={HatsPage} />
      <Route exact path='/E-commerce/topics' component={TopicsList}></Route>
      <Route path='/E-commerce/topics/:topicId' component={TopicDetail} />
    </Switch>
  </div>
  );
}

export default App;
