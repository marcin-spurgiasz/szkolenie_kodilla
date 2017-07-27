import React, { Component } from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            priority: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmitClick(this.state);
    }

    onChangeHandleText(event) {
        this.setState({ text: event.target.value });
    }

    onChangeHandlePriority(event) {
        this.setState({ priority: event.target.value });
    }

    render() {
        return (
            <form className="form-inline" onSubmit={event => this.onSubmit(event)}>
                <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Task..." onChange={event => this.onChangeHandleText(event)} value={this.state.text}/>
                <label className="sr-only" htmlFor="inlineFormInput">Priority</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Priority... (1-low 6-high)" onChange={event => this.onChangeHandlePriority(event)} value={this.state.priority}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>   
        );    
    }
}

export default TodoForm;