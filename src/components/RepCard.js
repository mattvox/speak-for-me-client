import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const MediaCard = props => {
  const {
    id,
    first_name,
    last_name,
    title,
    party,
    state,
  } = props

  return (
    <Card centered fluid>
      <Image src={`https://theunitedstates.io/images/congress/original/${id}.jpg`} fluid />
      <Card.Content>
        <Card.Header>
          {`${first_name} ${last_name}`}
        </Card.Header>
        <Card.Meta>
          {party === 'D' ? 'Democrat': ''}
          {party === 'R' ? 'Republican': ''}
          {party === 'I' ? 'Independent': ''}
        </Card.Meta>
        <Card.Description>
          {title} for {state}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/reps/${id}`}>LEARN MORE</Link>
      </Card.Content>
    </Card>
  )
}

export default MediaCard
