import React from 'react';
import { Link, IndexLink } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <IndexLink to="/" className="navbar-brand">Państwa.js</IndexLink>    
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/countries" activeStyle={{ color: '#48abee' }}>Countries</Link></li>
                    <li><Link to="/continents" activeStyle={{ color: '#48abee' }}>Continents</Link></li>
                    <li><Link to="/contact" activeStyle={{ color: '#48abee' }}>Contact</Link> </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;