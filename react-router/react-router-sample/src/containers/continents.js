import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions';
import CountryList from './country_list';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Continents extends Component {
    chooseContinent(event) {
        debugger;
        this.props.setContinent(event.target.value);
    }

    deleteCountry(id) {
        this.props.deleteCountry(id);
    }

    componentDidMount() {
        this.props.setContinent('Europa');
    }
    render() {
        return (
            <div>
                <select onChange={e => this.chooseContinent(e)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <CountryList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        visibleCountries: state.countries.visibleCountries
    };
};

export default connect(mapStateToProps, { setContinent, deleteCountry })(Continents);