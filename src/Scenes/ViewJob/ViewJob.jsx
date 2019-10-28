import React, { Component } from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';
import style from './style';
import { connect } from 'react-redux';
import { getJobData } from './viewJobReducer';
import { getAppliedJobs } from '../AppliedJobs/appliedJobsReducer'
import { fetchJobByIdThunk, showFormAction, applyJobFormAction, closeFormAction,
  closePreviewAction, showPreviewAction  } from './viewJobAction'
import { applyJobAction } from '../AppliedJobs/appliedJobsAction'
import { withRouter } from 'react-router'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Form, PreviewForm } from '../../components';

class ViewJob extends Component {

  componentDidMount() {
    const { match: { params: { id } }, dispatch } = this.props;
    dispatch(fetchJobByIdThunk(id));
  }

  handleClick = () => { 
    const { dispatch } = this.props;
    dispatch(showFormAction());
  }

  handleCancelClick = () => {
    const { dispatch } = this.props;
    dispatch(closeFormAction());
  }

  handleSubmit = () => {
    const { dispatch, name, file, email, coverLetter, data, appliedJobsData } = this.props;
    if (!name || !file || !coverLetter || !email) {
      let obj = {
        isError : "Please fill all the fields",
      };
      dispatch(applyJobFormAction(obj));
    } else{
      dispatch(applyJobAction([{ name, file, email, coverLetter, data }], appliedJobsData));
      dispatch(showPreviewAction());
    }
  }

  handleClose = () => {
    const { dispatch, history : { push } } = this.props;
    dispatch(closePreviewAction());
    push({
      pathname : '/'
    })
  }

  handleChange = key => event => {
    const { dispatch } = this.props;
    const { target : { value } } = event;
    if (key === 'file' && event.target.files && event.target.files.length) {
      const { type, name} = event.target.files[0];
      if (type === 'application/pdf' || type === 'application/msword' ||
       type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
        let obj = {
          isError : "",
        };
        obj[key] = name;
        dispatch(applyJobFormAction(obj));
      } else{
        let obj = {
          isError : "File Format not supported"
        };
        obj[key] = "";
        dispatch(applyJobFormAction(obj));
      }
    } else{
      let obj = {
        isError : "",
      };
      obj[key] = value;
      dispatch(applyJobFormAction(obj));
    } 
  };

  render() { 
    const { classes } = this.props;
    const { isError, isLoading, data : { title, company, location, description, id},
     showForm, name, file, email, coverLetter, showPreview, appliedJobsData } = this.props;
    let checker = false;
    if (isLoading) {
      return (
        <Paper className={classes.root}>
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        </Paper>
      )
    }
    if(showPreview){
      return <PreviewForm title={title} company={company} showPreview={showPreview} name={name} email={email} 
      file={file} coverLetter={coverLetter} handleClose={this.handleClose} />
    }
    if(showForm){
      return <Form title={title} company={company} showForm={showForm} name={name} email={email} 
      file={file} coverLetter={coverLetter} handleChange={this.handleChange}
      handleCancel={this.handleCancelClick} isError={isError}  handleSubmit={this.handleSubmit} />
    }
    if (isError){
      return <h1>{isError}</h1>
    }
    if (appliedJobsData.length > 0){
      checker = appliedJobsData.find(obj => obj.data.id === id);
    }
    return(
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4" className={classes.heading}>
          {`${title} at ${company}, ${location}`}
          <Button variant="outlined" color="primary" className={classes.button} disabled={checker} align="right" onClick={this.handleClick}>
            { checker ? 'Applied' : 'Apply' } 
          </Button>
        </Typography>
        <Typography component="pre" variant="body1" className={classes.info}>
          {description}
        </Typography>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading, isError, data, showForm, name, file, email, coverLetter, showPreview } = getJobData(state);
  const appliedJobsData = getAppliedJobs(state).data;
  return Object.assign({}, {
    isLoading,
    isError,
    data,
    showForm,
    name,
    file,
    email,
    coverLetter,
    appliedJobsData,
    showPreview,
  });
}

export default withRouter(connect(mapStateToProps)(withStyles(style)(ViewJob)));