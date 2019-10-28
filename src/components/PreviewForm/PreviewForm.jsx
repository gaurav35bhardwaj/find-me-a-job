import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  info : {
    color : 'grey',
    marginLeft: 10,
  },
  inLineComponents :{
    display: "flex",
  },
});


const PreviewForm = (props) => {
  const { title, classes, handleClose, company, showPreview, name, email, coverLetter, file } = props;
  return (
    <div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={showPreview}
        className={classes.dialogue}
      >
        <DialogTitle id="alert-dialog-title">
          <span className={classes.dialogue}>
            {`Preview of your job application for ${title} role at ${company}`} 
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.dialogue}>
          <Typography variant="h5" gutterBottom className={classes.inLineComponents} >
            Name : <Typography variant="h5" gutterBottom className={classes.info}>{name}</Typography>
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.inLineComponents} >
            Email : <Typography variant="h5" gutterBottom className={classes.info}>{email}</Typography>
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.inLineComponents} >
            Cover Letter : <Typography variant="h5" gutterBottom className={classes.info}>{coverLetter}</Typography>
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.inLineComponents} >
            File : <Typography variant="h5" gutterBottom className={classes.info}>{file}</Typography>
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus className={classes.dialogue}>
            Close
          </Button>
          <Button onClick={handleClose} color="primary" disabled autoFocus className={classes.dialogue}>
            Applied
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
PreviewForm.defaultProps = {
  handleClose : () => {},
}

PreviewForm.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviewForm);
