import React from 'react';
import '../style/country.css';

const Country = (props) => (
    <div className="country_logo_wrapper">
        <img className="country_logo" src={props.country.imageUrl} alt="country photo" />
    </div>
);

export default Country;