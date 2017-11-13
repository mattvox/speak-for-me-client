import { map as _map } from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import AddressForm from '../forms/AddressForm'
import RepCard from '../RepCard'

import * as actions from '../../actions'

const { Column: Col, Row } = Grid

class HomePage extends Component {
  componentDidMount() {
    this.props.user || !this.props.reps || this.props.resetReps()
  }

  renderReps() {
    const { state } = this.props.user
    const reps = { ...this.props.reps }

    return _map(reps, rep => (
      <Col width={4} key={rep.id}>
        <RepCard
          state={state}
          { ...rep }
        />
      </Col>
    ))
  }

  render() {
    const { user, submitAddressForm } = this.props

    return (
      <div>
        {
          !user
            ? <AddressForm onFormSubmit={() => submitAddressForm} />
            : <div>
                <Grid centered>
                  <Row>
                    <Col width={12}>
                      Showing results for {user.address}
                    </Col>
                  </Row>
                </Grid>
                <Grid centered stackable>
                  <Row columns={12}>
                    {this.renderReps()}
                  </Row>
                </Grid>
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ user, reps }) => ({
  user,
  reps,
})

export default connect(
  mapStateToProps, actions
)(HomePage)
