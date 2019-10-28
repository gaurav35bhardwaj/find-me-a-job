import {
  FETCH_JOBS,
  LANGUAGE,
  LOCATION,
  ERROR,
} from './dashboardAction';


const initialState = {
  language : "",
  location : "",
  isLoading : false,
  isError : "",
  data : "",
}

export  function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return Object.assign({}, state, {
        ...state.dashboardData,
        isLoading: action.isLoading,
        isError: action.isError,
        data: action.data,   
      });
    case LANGUAGE:
      return Object.assign({}, state, {
        ...state.dashboardData,
        language: action.language,
      });
    case LOCATION:
      return Object.assign({}, state, {
        ...state.dashboardData,
        location: action.location,
      });
    case ERROR:
      return Object.assign({}, state, {
        ...state.dashboardData,
        isError: action.isError,
      });
    default:
        return state
  }
}


export function getDashboardData(state) {
  return state.dashboardData;
};
