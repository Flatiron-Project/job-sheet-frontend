import React from 'react';
import { makeStyles } from '@material-ui/core'
import { theme } from '../styles/theme'

const Home = () => {
  const classes = homeStyle()

  return (
    <div>
      <h1 className={classes.header}>Welcome</h1>
    </div>
  );
}

const homeStyle = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
  }
}))
 
export default Home;