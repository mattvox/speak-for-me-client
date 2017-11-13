import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Header from './Header'

const { Column: Col, Row } = Grid

const App = ({ children }) => (
  <BrowserRouter>
    <div>
      <Header />
        <Grid centered container>
          <Row>
            <Col width={16}>
              {children}
            </Col>
          </Row>
        </Grid>
    </div>
  </BrowserRouter>
)

export default App
