import React from 'react'
import { connect } from 'react-redux'


import AddressForm from '../forms/AddressForm'
import * as actions from '../../actions'

const HomePage = (props) => {
  return (
    <div>
      <div>HomePage</div>
      <div>
        <AddressForm onFormSubmit={() => props.submitAddressForm} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps, actions
)(HomePage)
