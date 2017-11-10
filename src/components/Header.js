import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
})

const Header = ({ classes }) => (
  <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Who Speaks For Me
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
)

export default withStyles(styles)(Header)
