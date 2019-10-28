
export const LANGUAGE = 'LANGUAGE';
export const LOCATION = 'LOCATION';
export const FETCH_JOBS = 'FETCH_JOBS';
export const ERROR = 'ERROR';

// Export Thunk
export function fetchJobsThunk(language, location) {
  
  let url =location ? `https://jobs.github.com/positions.json?description=${language}&location=${location}`:
  `https://jobs.github.com/positions.json?description=${language}`;
  let headers = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      "accepts":"application/json"
    },
  };
  return function (dispatch) {
    dispatch(fetchJobsAction(true));
    fetch(url, headers)
    .then(res => {
      dispatch(fetchJobsAction(false));  
      return res.json();
    })
    .then(data => {
      console.log('data', data)
      dispatch(fetchJobsAction(false, "", data));          
    })
    .catch(err => {
      console.log('err', err)
      dispatch(fetchJobsAction(false, "Oops an error occured while fetchinng the data"));          
    });    
  };
  }

// Export Action Creators


// Action creator to update language
export  function languageAction(value) {
  return {
    type: LANGUAGE,
    language : value,
    isError : '',    
  }
}

// Action creator to update location
export  function locationAction(value) {
  return {
    type: LOCATION,
    location : value,  
    isError : '',  
  }
}

// Action creator to update error
export  function errorAction(value) {
  return {
    type: ERROR,
    isError : value,    
  }
}
  
// Action creator to update fetched data
export  function fetchJobsAction(isLoading, isError = "", data = []) {
    return {
      type: FETCH_JOBS,
      isLoading,
      isError,
      data,      
    }
  }