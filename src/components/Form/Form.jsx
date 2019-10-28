import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types';
import { withStyles, Input } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const styles = () => ({

  upload: {
    paddingTop: 10,
    cursor: 'pointer',
  },
  error: {
    color : 'red',
  }
 
});


const Form = (props) => {
  const { title, handleCancel, classes, handleSubmit, company, showForm, handleChange,
  name, email, coverLetter, isError } = props;
  return (
    <div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={showForm}
        className={classes.dialogue}
      >
        <DialogTitle id="alert-dialog-title">
          <span className={classes.dialogue}>
            {`Apply for ${title} role at ${company}`} 
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.dialogue}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              className={classes.textField}
              margin="normal"
              fullWidth
              onChange={handleChange('name')}
            />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={email}
              onChange={handleChange('email')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="coverLetter"
              label="Cover Letter"
              className={classes.textField}
              value={coverLetter}
              onChange={handleChange('coverLetter')}
              margin="normal"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
            />
            <Input
              id="uploadFile"
              type="file"
              name="uploadFile"
              className={classes.upload}
              onChange={handleChange('file')}
              inputProps={{ accept: ".docx, .doc, .pdf" }}
            />
          </DialogContentText>
          <h5 className={classes.error} >{isError}</h5>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" className={classes.dialogue}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus className={classes.dialogue}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
Form.defaultProps = {
  handleChange : () => {},
  handleSubmit : () => {},
  handleCancel : () => {},
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
