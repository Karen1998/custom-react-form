import { useEffect, useState } from 'react'
import { textValidation } from '../helpers/textValidation';
import { emailValidation } from '../helpers/emailValidation';

const useInputValidation = ({ type, value }) => {
  const [state, setState] = useState({
    error: false,
    message: ''
  });

  useEffect(() => {
    switch (type) {
      case 'text': {
        if (!textValidation(value)) {
          return setState({
            error: true,
            message: 'Enter string value'
          });
        } else {
          return setState({
            error: false,
            message: ''
          });
        }
      }
      case 'email': {
        if (!emailValidation(value)) {
          return setState({
            error: true,
            message: 'Fill correct email'
          });
        } else {
          return setState({
            error: false,
            message: ''
          });
        }
      }
      default: {
        return setState({
          error: false,
          message: ''
        });
      }
    }
  }, [type, value])

  return {
    error: state.error,
    message: state.message
  }
}

export default useInputValidation
