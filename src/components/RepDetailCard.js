import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 1345,
  },
  media: {
    width: '100%',
  },
}

const RepDetailCard = props => {
  const {
    classes,
    id,
    name,
    role,
    party,
    state,
    roles,
  } = props

  const {
    congress,
    office,
    phone,
    fax,
    bills_sponsored,
    bills_cosponsored,
    votes_with_party_pct,
  } = roles[0]

  const description = (
    <div>
      <p>
        {name} is currently serving as the {role} from {state} in the {congress}th United States Congress. {name} has sponsored {bills_sponsored} bills, co-sponsored {bills_cosponsored} bills, and votes along party lines {votes_with_party_pct}% of the time.
      </p>
      <p><strong>Office/Contact Information</strong></p>
      <p>Address: {office}</p>
      <p>Phone: {phone}</p>
      <p>Fax: {fax}</p>
    </div>
  )

  return (
    <div>
      <Paper className={classes.card}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <img
              className={classes.media}
              src={`https://theunitedstates.io/images/congress/original/${id}.jpg`}
              alt={id}
            />
          </Grid>

          <Grid item xs>
            <Typography type='headline' component='h1'>
              {name}
            </Typography>
            <div style={{ marginTop: 8 }}></div>
            <Typography type='body1' component='h3'>
              {party === 'D' ? 'Democrat': ''}
              {party === 'R' ? 'Republican': ''}
              {party === 'I' ? 'Independent': ''}
            </Typography>
            <div style={{ marginTop: 16 }}></div>
            <Typography component='div'>
              {description}
            </Typography>
          </Grid>

        </Grid>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(RepDetailCard)
