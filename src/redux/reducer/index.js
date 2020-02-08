import { combineReducers } from 'redux';
import snackbarReducer from './snackbarReducer';

export default combineReducers({ snackbarState: snackbarReducer });
