import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        // Add routes here
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default Routes