import React from 'react'
import FormContextContainer from '../../context/FormContext'

const FormContainer = ({ values, children }) => {
  return (
    <FormContextContainer values={values}>
      {children}
    </FormContextContainer>
  )
}

export default FormContainer
