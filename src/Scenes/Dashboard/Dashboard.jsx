import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import Grid from '@material-ui/core/Grid';
import { Form } from './components';
import { List } from '../../components';
import { connect } from 'react-redux';
import { getDashboardData } from './dashboardReducer';
import { fetchJobsThunk, languageAction, errorAction, locationAction} from './dashboardAction';

class Dashboard extends Component {
  handleChange = key => event => {
    const { dispatch } = this.props;
    const { target : { value } } = event; 
    if (key === 'location') {
      dispatch(locationAction(value));
    }
    else if (key === 'language') {
      dispatch(languageAction(value));
    }
  };

  handleClick = () => {
    const { dispatch, language, location } = this.props;
    if (language){
      dispatch(fetchJobsThunk(language, location));
    }
    else if (!language){
      dispatch(errorAction('Please enter language'));
    }
  };

  render() { 
    const { classes } = this.props;
    const { language, location, isError, isLoading, data } = this.props;
    return(
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={4} className={classes.item}>
          <Form language={language} location={location} 
            isError={isError} handleChange={this.handleChange} handleClick={this.handleClick} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <List data={data} isLoading={isLoading}/>
		    </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { language, location, isLoading, isError, data } = getDashboardData(state);
  return Object.assign({}, {
    language,
    location,
    isLoading,
    isError,
    data,
  });
}

export default connect(mapStateToProps)(withStyles(style)(Dashboard));