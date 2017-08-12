import React, { Component } from 'react';

import styles from '../style/UserForm.css';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }    

    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    
    render() {
        return (
            <div className={styles.UserForm}>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        className={styles.UserInput}
                        placeholder='Write your nickname and press enter'
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                    />
                </form>
            </div>
        );
    }
}