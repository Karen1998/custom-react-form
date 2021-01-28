import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: '10px 5px'
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0 ',
    marginBottom: '15px',
  },
  labelRoot: {
    marginBottom: '5px',
    textTransform: 'capitalize'
  },
  inputRoot: {
    padding: '10px 5px',
    borderRadius: '5px'
  },
  errorBox: {
    padding: '5px',
    textAlign: 'left'
  },
  errorMessage: {
    color: 'red',
    fontWeight: 500
  }
});


export default useStyles;
