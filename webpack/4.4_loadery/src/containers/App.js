import React from 'react';
import uuid from 'uuid'

import Title from '../components/Title'

require("./App.css");

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{id: 1, text: 'foo'}, {id: 2, text: 'foo1'}]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className='TodoApp'>
                <Title NumberOfTodos={this.state.data.length}/>
            </div>
        );
    }
}

export default App;