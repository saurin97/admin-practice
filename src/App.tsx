import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Dashboard from './features/dashboard/dashboard'
import Account from './features/account/account'
import Analytics from './features/analytics/analytics'
import Address from './features/address/address'
import Company from './features/company/company'
import Questions from './features/questions/questions'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/dashboard' component = {Dashboard} />
        <Route path='/account' component = {Account} />
        <Route path='/analytics' component = {Analytics} />
        <Route path='/address' component = {Address} />
        <Route path='/company' component = {Company} />
        <Route path='/questions' component = {Questions} />
        <Redirect to='/dashboard' />
      </Switch>
    </div>
  );
}

export default App;
