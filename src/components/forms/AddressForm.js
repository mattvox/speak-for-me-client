import { map as _map, each as _each } from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { Grid } from 'semantic-ui-react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Done from 'material-ui-icons/Done'

import FormField from './FormField'
import formFields from './formFields'

const { Column: Col, Row } = Grid

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

class AddressForm extends Component {
  renderFields() {
    return _map(formFields, ({ label, name }) => {
      return (
        <Col mobile={16} tablet={12} computer={10} key={name}>
          <Field
            component={FormField}
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
        <form
          onSubmit={handleSubmit(onFormSubmit(values))}
        >
          <Grid columns={1} centered>
            <Row>
              {this.renderFields()}
            </Row>
            <Row>
              <Col width={6} textAlign={'center'}>
                <Button
                  raised color='primary'
                  onClick={() => this.props.dispatch(reset('addressForm'))}
                >
                  Clear
                </Button>
                <Button
                  type='submit'
                  className={this.props.classes.button}
                  raised
                  color="accent"
                  disabled={pristine || submitting || invalid}
                >
                  Submit
                  <Done className={this.props.classes.rightIcon} />
                </Button>
              </Col>
            </Row>
          </Grid>
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
})(withStyles(styles)(AddressForm))
