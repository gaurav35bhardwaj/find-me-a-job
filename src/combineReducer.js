
import  {combineReducers}  from 'redux';
import {
    fetchDataReducer
} from './Scenes/Dashboard/dashboardReducer';
import { fetchJobByIdReducer } from './Scenes/ViewJob/viewJobReducer';
import { appliedJobsReducer } from './Scenes/AppliedJobs/appliedJobsReducer';
export default combineReducers({
    dashboardData : fetchDataReducer,
    fetchedJobById : fetchJobByIdReducer,
    appliedJobs : appliedJobsReducer,
});
