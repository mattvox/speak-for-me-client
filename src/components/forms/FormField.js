import React from 'react'
import TextField from 'material-ui/TextField'

const FormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <TextField
        {...input}
        label={label}
        margin='normal'
        helperText={touched && error}
        fullWidth
      />
    </div>
  )
}

export default FormField
