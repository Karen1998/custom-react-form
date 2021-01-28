import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss';
import { FormContext } from '../../context/FormContext';


const useStyles = createUseStyles({
  errorBox: {
    margin: '10px',
    padding: '10px 5px',
    backgroundColor: '#f00',
    borderRadius: '5px',

    '& p': {
      color: '#fff'
    }
  }
})

const FormComponent = ({ children }) => {
  const { state, errors } = useContext(FormContext);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>

      {children}

      <button type='submit'>
        Submit form
      </button>

      {errors && (
        <div className={classes.errorBox}>
          <p>Please fill you\'r form correctly</p>
        </div>
      )}

    </form>
  )
}

export default FormComponent
