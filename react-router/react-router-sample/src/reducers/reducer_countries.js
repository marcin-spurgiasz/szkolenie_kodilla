import { GET_COUNTRIES } from '../actions/actions';
import countriesData from '../data/countries.json';

const INITIAL_STATE = {
    countries: countriesData
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_COUNTRIES:
        return [...state]    
    }
    return state;
}