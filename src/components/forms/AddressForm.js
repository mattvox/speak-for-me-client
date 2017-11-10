import { map as _map, each as _each } from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import FormField from './FormField'
import formFields from './formFields'

class AddressForm extends Component {
  renderFields() {
    return _map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    const { pristine, submitting, handleSubmit, onFormSubmit, values } = this.props

    return (
      <div style={{ margin: '60px' }}>
        <form
          onSubmit={handleSubmit(onFormSubmit(values))}
        >
          {this.renderFields()}
          <button type='submit' disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  _each(formFields, ({ name }) =>
    !values[name] && (errors[name] = 'This is a required field'))

  return errors
}

export default reduxForm({
  validate,
  form: 'addressForm',
  destroyOnUnmount: true,
})(AddressForm)
