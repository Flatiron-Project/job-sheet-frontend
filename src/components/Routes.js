/* eslint-disable */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import GigCardContainer from '../views/GigCardContainer'

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/gigCardcontainer' component={GigCardContainer} />
      </Switch>
    </div>
  )
}

export default Routes
