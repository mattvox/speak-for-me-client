import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const FormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <Form.Field style={{ padding: 10 }}>
        <Form.Input
          {...input}
          label={label}
          required
        />
        <Message
          error
          visible={touched && !!error}
          content={touched && error}
        />
      </Form.Field>
    </div>
  )
}

export default FormField
