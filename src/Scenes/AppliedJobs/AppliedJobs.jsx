import React from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import { connect } from 'react-redux';
import { getAppliedJobs } from './appliedJobsReducer';
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/Grid';
import { List } from '../../components';

const AppliedJobs = (props) => {
  const { classes, appliedJobsData } = props;
  if (!appliedJobsData.length){
    return <h1>No Jobs...</h1>
  }
  return(
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} className={classes.item}>
        <List data={appliedJobsData} isLoading={false} isAppliedJobs={true} />
	    </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  const appliedJobsData = getAppliedJobs(state).data;
  return Object.assign({}, {
    appliedJobsData,
  });
}

export default withRouter(connect(mapStateToProps)(withStyles(style)(AppliedJobs)));