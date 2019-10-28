import {
  APPLY_JOB,
} from './appliedJobsAction';

export  function appliedJobsReducer(state = { data : [] }, action) {
  switch (action.type) {
    case APPLY_JOB:
      const obj = Object.assign({}, state,  {
        ...state.appliedJobs,
        ...action   
      });
      delete obj.type;
      return obj;
    default:
        return state
  }
}

export function getAppliedJobs(state) {
  return state.appliedJobs;
}
