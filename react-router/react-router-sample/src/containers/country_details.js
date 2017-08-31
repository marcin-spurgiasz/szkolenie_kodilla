import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions';
import '../style/country.css';

class CountryDetails extends Component {
    componentDidMount() {
        this.props.getCountry(this.props.params.id);
    }
    render() {
        const { selectedCountry } = this.props;
        if (!selectedCountry) {
            return <div>Loading...</div>
        }
        return (
            <div className="country-wrapper">
                <header>
                    <img className="country-photo" src={selectedCountry.imageUrl} alt="country photo" />
                </header>
                <div className="country-info">
                    <h1>{selectedCountry.name}</h1>
                    <h2>Kontynent: {selectedCountry.continent}</h2>
                    <div className="info">
                        <div>
                            <span>{selectedCountry.populace}</span>
                            <span>Ludność[mln]</span>
                        </div>

                        <div>
                            <span>{selectedCountry.capital}</span>
                            <span>Stolica</span>
                        </div>

                        <div>
                            <span>{selectedCountry.currency}</span>
                            <span>Waluta</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedCountry: state.countries.selectedCountry
    }
}

export default connect(mapStateToProps, { getCountry })(CountryDetails);