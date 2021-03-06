import { map as _map, each as _each } from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { Grid, Form, Button } from 'semantic-ui-react'

import FormField from './FormField'
import formFields from './formFields'

const { Column: Col, Row } = Grid

class AddressForm extends Component {
  renderFields() {
    return _map(formFields, ({ label, name }) => {
      return (
        <Col mobile={16} tablet={12} computer={10} key={name}>
          <Field
            component={FormField}
            as={Form.Input}
            type='text'
            label={label}
            name={name}
          />
        </Col>
      )
    })
  }

  render() {
    const { pristine, submitting, invalid, handleSubmit, onFormSubmit, values } = this.props

    return (
      <div style={{ marginTop: '60px' }}>
        <Form
          onSubmit={handleSubmit(onFormSubmit(values))}
        >
          <Grid columns={1} centered>
            <Row>
              {this.renderFields()}
            </Row>
            <Row>
              <Col width={8} textAlign={'center'}>
                <Button
                  color='red'
                  onClick={
                    () => this.props.dispatch(reset('addressForm'))
                  }
                  disabled={pristine || submitting}
                >
                  Clear
                </Button>
                <Button
                  type='submit'
                  color='blue'
                  disabled={pristine || submitting || invalid}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
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
