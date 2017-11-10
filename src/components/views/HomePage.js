import { map as _map } from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'

import AddressForm from '../forms/AddressForm'
import RepCard from '../RepCard'

import * as actions from '../../actions'

class HomePage extends Component {
  renderReps() {
    const { state } = this.props.user
    const reps = { ...this.props.reps }

    return _map(reps, rep => (
      <Grid item xs={12} sm={4} key={rep.id}>
        <RepCard
          state={state}
          { ...rep }
        />
      </Grid>
    ))
  }

  render() {
    const { user, reps, submitAddressForm } = this.props

    return (
      <div>
          {
            !reps
              ? <AddressForm onFormSubmit={() => submitAddressForm} />
              : <div>
                  <Grid container spacing={24} justify='center'>
                    <Grid item xs={12}>
                      Showing results for {user.address}
                    </Grid>
                  </Grid>
                  <Grid container spacing={24} justify='center'>
                    {this.renderReps()}
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
