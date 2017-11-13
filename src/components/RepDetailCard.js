import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'

const RepDetailCard = props => {
  const {
    id,
    first_name,
    last_name,
    title,
    party,
    state,
    congress,
    office,
    phone,
    fax,
    bills_sponsored,
    bills_cosponsored,
    votes_with_party_pct,
  } = props

  const description = (
    <div>
      <p>
        {last_name} is currently serving as the {title} from {state} in the {congress}th United States Congress. {last_name} has sponsored {bills_sponsored} bills, co-sponsored {bills_cosponsored} bills, and votes along party lines {votes_with_party_pct}% of the time.
      </p>
    </div>
  )

  const contactInfo = (
    <div>
      <p>Address: {office}</p>
      <p>Phone: {phone}</p>
      <p>Fax: {fax}</p>
    </div>
  )

  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={6}>
          <Image
            fluid
            rounded
            src={`https://theunitedstates.io/images/congress/original/${id}.jpg`}
            alt={id}
          />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header
            as='h1'
            content={`${first_name} ${last_name}`}
            subheader={
              party === 'D' ? 'Democrat':
              party === 'R' ? 'Republican':
              party === 'I' ? 'Independent': ''
            }
          />
          {description}
          <Header as='h4' dividing>
            Office Info
          </Header>
          {contactInfo}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default RepDetailCard
