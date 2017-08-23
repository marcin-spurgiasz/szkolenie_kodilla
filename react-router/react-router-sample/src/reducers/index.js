import { combineReducers } from 'redux';
import countriesReducer from './reducer_countries';

const reducers = combineReducers({
    countries: countriesReducer
});

export default reducers;