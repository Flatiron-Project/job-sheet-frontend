import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        // Add routes here
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default Routes