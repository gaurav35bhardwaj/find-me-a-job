import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducer from './combineReducer.js'

const store = createStore(reducer, applyMiddleware(ReduxThunk));

store.subscribe(()=>{
    store.getState();
});
export default store;