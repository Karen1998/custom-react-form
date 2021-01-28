import React, { createContext, useState } from 'react'


export const FormContext = createContext();

const FormContextContainer = ({ values, children }) => {
  const [state, setState] = useState({
    ...values
  });

  const [errors, setErrors] = useState(false);

  const handleChange = ({ name, value }) => {
    setState({
      ...state,
      [name]: value
    });
  };

  const hasError = (errors) => {
    setErrors(errors);
  };

  return (
    <FormContext.Provider value={{
      state,
      errors,
      handleChange,
      hasError
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextContainer
