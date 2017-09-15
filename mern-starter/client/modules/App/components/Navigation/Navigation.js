import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './Navigation.css'
const Navigation = (props) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_ul}>
                <li><IndexLink to="/" className={styles.nav_logo}>MERN Stack.js</IndexLink></li>
                <li><Link to="/" activeStyle={{ color: '#48abee' }}>Home</Link></li>
                <li><Link to="/posts" activeStyle={{ color: '#48abee' }}>Page List</Link></li>
                <li><Link to="/about" activeStyle={{ color: '#48abee' }}>About</Link> </li>
            </ul>
        </nav>
    );
};

export default Navigation;