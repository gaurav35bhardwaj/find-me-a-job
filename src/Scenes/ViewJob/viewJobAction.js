export const GET_JOB_BY_ID = 'GET_JOB_BY_ID';
export const SHOW_FORM = 'SHOW_FORM';
export const APPLY_JOB_FORM = 'APPLY_JOB_FORM';
export const CLOSE_FORM = 'CLOSE_FORM';
export const CLOSE_PREVIEW = 'CLOSE_PREVIEW';
export const SHOW_PREVIEW = 'SHOW_PREVIEW';

// Export Thunk
export function fetchJobByIdThunk(id) {
  
  let url =`https://jobs.github.com/positions/${id}.json?markdown=true`;
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
    dispatch(fetchedJobByIdAction(true));
    fetch(url, headers)
    .then(res => {
      dispatch(fetchedJobByIdAction(false));  
      return res.json();
    })
    .then(data => {
      dispatch(fetchedJobByIdAction(false, "", data));          
    })
    .catch(err => {
      console.log('err', err)
      dispatch(fetchedJobByIdAction(false, "Oops an error occured while fetching the data"));          
    });    
  };
  }

// Export Action Creators

// Action creator to update showForm key
export  function showFormAction() {
  return {
    type: SHOW_FORM,
    showForm : true,
  }
}

// Action creator to update showForm key
export  function closeFormAction() {
  return {
    type: CLOSE_FORM,
    showForm : false,
    isError : "",
    name : "",
    email : "",
    coverLetter : "",
    file : "",
  }
}

// Action creator to update showPreview key
export  function showPreviewAction() {
  return {
    type: SHOW_PREVIEW,
    showPreview : true,
    showForm : false,
  }
}

// Action creator to update showForm key
export  function closePreviewAction() {
  return {
    type: CLOSE_PREVIEW,
    isLoading : false,
    isError : "",
    data : [],
    showForm : false,
    showPreview : false,
    name : "",
    email : "",
    coverLetter : "",
    file : "",
  }
}


export  function applyJobFormAction(value) {
  return {
    type: APPLY_JOB_FORM,
    ...value,
  }
}
  
// Action creator to update fetched data
export  function fetchedJobByIdAction(isLoading, isError = "", data = []) {
  return {
    type: GET_JOB_BY_ID,
    isLoading,
    isError,
    data,      
  }
}

