import React from 'react'
import { Card } from 'semantic-ui-react'

const MediaCard = props => {
  const {
    url,
    snippet,
    headline,
  } = props

  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header>
          {headline}
        </Card.Header>
        <Card.Description>
          {snippet}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={url}>VIEW STORY</a>
      </Card.Content>
    </Card>
  )
}

export default MediaCard
