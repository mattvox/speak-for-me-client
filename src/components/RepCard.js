import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
}

const MediaCard = props => {
  const {
    classes,
    id,
    name,
    title,
    party,
    state,
  } = props

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`https://theunitedstates.io/images/congress/original/${id}.jpg`}
          title={id}
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            {name}
          </Typography>
          <Typography type='body1' component='div'>
            {party === 'D' ? 'Democrat': ''}
            {party === 'R' ? 'Republican': ''}
            {party === 'I' ? 'Independent': ''}
          </Typography>
          <Typography component='p'>
            {title} for {state}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            <Link to={`/reps/${id}`}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(MediaCard)
