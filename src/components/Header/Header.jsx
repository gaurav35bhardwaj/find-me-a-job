import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = () => ({
  link: {
    textDecoration: 'none',
  },
});


const Header = ({ classes }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Find me a job
    </Typography>
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Link to="/" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
          Home
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/myJobs" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
          Jobs Applied 
          </Button>
        </Link>
      </Grid>
    </Grid>
  </>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Header);
