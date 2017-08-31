import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Country from '../components/country';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions';
import '../style/country.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class CountryList extends Component {
    componentWillMount() {
        this.props.getCountries();
        this.props.searchCountries('');
    }

    search(event) {
        this.props.searchCountries(event.target.value);
    }

    deleteCountry(id) {
        this.props.deleteCountry(id);
    }

    render() {
        let countries = this.props.visibleCountries;
        if(!countries) {countries = this.props.countries}
        const countryItems = countries.map(country => {
            return (
                <div className="single_country" key={country.id}>
                    <Link className="logo" to={'countries/country/' + country.id}>
                        <Country country={country} />
                    </Link>
                    <button onClick={this.deleteCountry.bind(this, country.id)}>DELETE</button>
                </div>
            )
        });
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)} />
                </div>
                <div className="countries_list">
                    {countryItems}
                </div>
            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        countries: state.countries.countries,
        visibleCountries: state.countries.visibleCountries
    }
}

export default connect(mapStateToProps, { getCountries, searchCountries, deleteCountry })(CountryList); 