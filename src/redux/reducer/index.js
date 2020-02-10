import { combineReducers } from 'redux';
import snackbarReducer from './snackbarReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({ snackbarState: snackbarReducer, moviesState: moviesReducer });
