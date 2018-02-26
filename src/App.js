import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './componets/HomePage';
import LoginPage from './componets/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
      </div>
    );
  }
}