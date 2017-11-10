import React from 'react'
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
)

export default withStyles(styles)(App)
