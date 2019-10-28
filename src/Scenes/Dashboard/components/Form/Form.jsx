import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from './style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Form = ({ classes, language, location, isError, handleChange, handleClick }) => (
  <Paper className={classes.paper}>
    <TextField
      id="language"
      label="Programming Language"
      variant="outlined"
      value={language}
      className={classes.textField}
      margin="normal"
      fullWidth
      onChange={handleChange('language')}
    />
    <TextField
      id="location"
      label="Location (Optional)"
      className={classes.textField}
      value={location}
      onChange={handleChange('location')}
      margin="normal"
      variant="outlined"
      fullWidth
    />
    <Button
      variant="outlined"
      size="large"
      color="primary"
      className={classes.button}
    onClick={handleClick}
    >
      Search Jobs
    </Button>
    <h5 className={classes.errorMsg} >{isError}</h5>
  </Paper>
);

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  isError: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  handleClick : PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(style)(Form);
