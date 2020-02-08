import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducer/index';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
