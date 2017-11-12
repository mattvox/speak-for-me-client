import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import Header from './Header'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    padding: 12,
  },
})

const App = ({ classes, children }) => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={24} justify='center'>
          <Grid item xs={12} sm={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  </BrowserRouter>
)

export default withStyles(styles)(App)
