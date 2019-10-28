import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header } from '../components';
import { withStyles } from '@material-ui/core';
import NestedRoutes from '../Routes/NestedRoutes';

const styles = () => ({
  root: {
    minHeight: '100vh',
    maxwidth: '100%',
    margin: 0,
    padding: 0,
  },
  header: {
    minHeight: '15vh',
    backgroundColor: '#E9ECEC',
    textAlign: 'center',
  },
  body: {
    minHeight: '85vh',
    maxwidth: '90%',
    backgroundColor: '#E2F6F6',
  },
});
const MainLayout = ({ classes }) => {
  return (

    <div className="Main-Layout">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <NestedRoutes />
        </Grid>
      </Grid>
    </div>


  )
};
export default withStyles(styles)(MainLayout);