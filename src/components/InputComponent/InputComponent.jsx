import React, { useContext, useEffect } from 'react'
import { FormContext } from '../../context/FormContext';
import useInputValidation from '../../hooks/useInputValidation';
import useStyles from './styles';

const InputComponent = ({ type, name, isRequired, ...props }) => {
  const { state, handleChange, hasError } = useContext(FormContext);
  const errors = useInputValidation({ type, value: state[name] });

  const classes = useStyles();

  useEffect(() => {
    hasError(errors.error)
  }, [errors.error]);

  return (
    <div className={classes.inputBox}>
      <label htmlFor={name} className={classes.labelRoot}>
        {name}
      </label>

      <input
        name={name}
        type={type}
        value={state[name]}
        onChange={(e) => handleChange({ name, value: e.target.value })}
        required={isRequired}
        className={classes.inputRoot}
      />

      {errors.error && (
        <div className={classes.errorBox}>
          <span className={classes.errorMessage}>{errors.message}</span>
        </div>
      )}
    </div>
  )
}

export default InputComponent
