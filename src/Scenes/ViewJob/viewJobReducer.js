import {
  GET_JOB_BY_ID,
  SHOW_FORM,
  APPLY_JOB_FORM,
  CLOSE_FORM,
  CLOSE_PREVIEW,
  SHOW_PREVIEW,
} from './viewJobAction';


const initialState = {
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

export  function fetchJobByIdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOB_BY_ID:
      return Object.assign({}, state, {
        ...state.fetchedJobById,
        isLoading: action.isLoading,
        isError: action.isError,
        data: action.data,   
      });
    case SHOW_FORM:
      return Object.assign({}, state, {
        ...state.fetchedJobById,
        showForm: action.showForm,   
      });
    case APPLY_JOB_FORM:
      const obj = Object.assign({}, state, {
        ...state.fetchedJobById,
        ...action   
      });
      delete obj.type;
      return obj;
    case CLOSE_FORM:
      return Object.assign({}, state, {
        ...state.fetchedJobById,
        showForm : action.showForm,
        isError : action.isError,
        name : action.name,
        email :  action.email,
        coverLetter : action.coverLetter,
        file : action.file,   
      });
    case CLOSE_PREVIEW:
      return Object.assign({}, state, {
        ...state.fetchedJobById,
        showForm : action.showForm,
        name : action.name,
        email :  action.email,
        coverLetter : action.coverLetter,
        file : action.file,   
        isLoading : action.isLoading,
        isError : action.isError,
        data : action.data,
        showPreview : action.showPreview,
      });
    case SHOW_PREVIEW:
      return Object.assign({}, state, {
        ...state.fetchedJobById,
        showForm: action.showForm,  
        showPreview : action.showPreview, 
      });
    default:
        return state
  }
}


export function getJobData(state) {
  return state.fetchedJobById;
};

