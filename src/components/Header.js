import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu } from 'semantic-ui-react'

const Header = ({ classes }) => (
  <Menu borderless inverted style={{ marginBottom: 40 }}>
    <Container>
      <Menu.Item as={Link} to='/'>
        <Menu.Header as='h2'>
          <Icon name='bullhorn' style={{ marginRight: 12 }} />
          who speaks for me
        </Menu.Header>
      </Menu.Item>
    </Container>
  </Menu>
)

export default Header
