import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
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
    url,
    snippet,
    headline,
  } = props

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type='headline' component='h2'>
            {headline}
          </Typography>
          <Typography type='body1' component='p'>
            {snippet}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            <a href={url}>View Story</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(MediaCard)
