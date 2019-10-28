import React from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  loader: {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: '98%',
    minWidth: 600,
    marginTop : 5,
    minHeight: '75vh',
    maxHeight: '75vh',
    paddingTop: 20,
    paddingBottom: 20,
    overflowY: 'auto',
  },
  table: {
    minWidth: 600,
    paddingTop: 20,
    paddingBottom: 20,
  },
};

const List = (props) => {
  const { classes, data, isLoading, isAppliedJobs } = props;
  if (isLoading) {
    return (
      <Paper className={classes.root}>
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      </Paper>
    )
  }
  if (data.length === 0){
    return <Paper className={classes.root}><h1>No Data...</h1></Paper>
  }
  return (
    <Paper className={classes.root}>
     <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Profile</TableCell>
            <TableCell align="left">Company Name</TableCell>
            <TableCell align="left">Loacation</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => {
            let myItem = item;
            if (isAppliedJobs){
              myItem = item.data
            }
            const { id, company, location, title, type } = myItem;
            return (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell align="left">{company}</TableCell>
                <TableCell align="left">{location}</TableCell>
                <TableCell align="left">{type}</TableCell>
                <TableCell align="left">
                  <Link to={`/job/${id}`}> View more </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

List.defaultProps = {
  isAppliedJobs : false,
}
List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);


