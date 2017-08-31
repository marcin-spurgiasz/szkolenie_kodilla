import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/actions';
import countriesData from '../data/countries.json';

const INITIAL_STATE = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_COUNTRIES:
            return { ...state, countries: state.countries };  

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => {
                return country.id === parseInt(action.payload.id);
            });
            return { ...state, selectedCountry: selectedCountry }

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => {
                return country.name.toLowerCase().includes(action.payload.searchText.toLowerCase());
            });
            return { ...state, visibleCountries: foundCountries }

        case DELETE_COUNTRY:
            const countries = state.countries.filter(country => { return country.id !== parseInt(action.payload.id) });
            const visibleCountries = state.visibleCountries.filter(country => { return country.id !== parseInt(action.payload.id) })
            return { ...state, countries: countries, visibleCountries: visibleCountries }

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => { return country.continent === action.payload.name });
            return { ...state, visibleCountries: continentCountries }

    }
    return state;
}