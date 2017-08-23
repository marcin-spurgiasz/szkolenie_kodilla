import React, { Component } from 'react';
import Navigation from './navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />  
        <div className="container-fluid">
          {this.props.children}
        </div>  
      </div>
    );
  }
}
